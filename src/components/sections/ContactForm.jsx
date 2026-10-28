import { useState } from 'react';
import { CircleCheck, Clock, LoaderCircle, Send, TriangleAlert } from 'lucide-react';
import { profile } from '../../data/profile';
import { services } from '../../data/services';
import Button from '../ui/Button';
import styles from './ContactForm.module.css';

const projectTypes = [...services.map((s) => s.title), 'Something else'];

const SLOW_AFTER_MS = 8000;
const GIVE_UP_AFTER_MS = 90000;

const statusMessages = {
  sent: { icon: CircleCheck, text: 'Thanks! Your message has been sent — I’ll reply as soon as I can.' },
  slow: { icon: Clock, text: 'Still sending — this can take up to a minute. Please keep this page open.' },
  mailto: { icon: CircleCheck, text: 'Your email app should now open with the message ready to send.' },
  error: { icon: TriangleAlert, text: `Something went wrong. Please email me directly at ${profile.email}.` },
};

/** Builds the request for Web3Forms (preferred, fast) or the generic endpoint (FormSubmit / Formspree). */
function buildRequest(data) {
  const subject = `New portfolio enquiry: ${data.projectType} — ${data.name}`;

  if (profile.web3formsKey) {
    // FormData keeps this a "simple" CORS request, so there's no preflight round-trip.
    const body = new FormData();
    const fields = { ...data, access_key: profile.web3formsKey, subject, from_name: 'Portfolio contact form' };
    Object.entries(fields).forEach(([key, value]) => body.append(key, value));
    return ['https://api.web3forms.com/submit', { method: 'POST', headers: { Accept: 'application/json' }, body }];
  }

  return [
    profile.contactFormEndpoint,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, _subject: subject, _template: 'table' }),
    },
  ];
}

/**
 * Sends the enquiry to Web3Forms or `profile.contactFormEndpoint` when one is
 * configured; otherwise falls back to opening a pre-filled email.
 */
export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { _gotcha, ...data } = Object.fromEntries(new FormData(form));
    if (_gotcha) return; // honeypot filled → bot

    if (profile.web3formsKey || profile.contactFormEndpoint) {
      setStatus('sending');
      const controller = new AbortController();
      const slowTimer = setTimeout(() => setStatus('slow'), SLOW_AFTER_MS);
      const giveUpTimer = setTimeout(() => controller.abort(), GIVE_UP_AFTER_MS);
      try {
        const [url, init] = buildRequest(data);
        const response = await fetch(url, { ...init, signal: controller.signal });
        // FormSubmit answers 200 with { success: "false" } until the form is activated.
        const result = await response.json().catch(() => ({}));
        if (!response.ok || String(result.success) === 'false') {
          throw new Error(result.message || `Request failed: ${response.status}`);
        }
        form.reset();
        setStatus('sent');
      } catch {
        setStatus('error');
      } finally {
        clearTimeout(slowTimer);
        clearTimeout(giveUpTimer);
      }
      return;
    }

    const subject = `Project enquiry: ${data.projectType}`;
    const body = `Hi ${profile.name.split(' ')[0]},\n\n${data.message}\n\n— ${data.name}\n${data.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  };

  const message = statusMessages[status];
  const sending = status === 'sending' || status === 'slow';

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h3>Start a project</h3>
        <p>Share a few details and I’ll get back to you.</p>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Jane Smith" />
        </label>
        <label className={styles.field}>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required placeholder="jane@brand.com" />
        </label>
      </div>

      <label className={styles.field}>
        <span>What do you need help with?</span>
        <select name="projectType" defaultValue={projectTypes[0]}>
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Project details</span>
        <textarea
          name="message"
          rows="5"
          required
          minLength={10}
          placeholder="Tell me about your store, what you’d like to achieve and your timeline…"
        />
      </label>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

      <Button
        type="submit"
        size="lg"
        className={styles.submit}
        disabled={sending}
        iconRight={
          sending ? (
            <LoaderCircle size={18} className={styles.spin} aria-hidden="true" />
          ) : (
            <Send size={17} aria-hidden="true" />
          )
        }
      >
        {sending ? 'Sending…' : 'Send message'}
      </Button>

      <div className={styles.statusArea} aria-live="polite">
        {message && (
          <p className={`${styles.status} ${status === 'error' ? styles.error : ''}`}>
            <message.icon size={18} aria-hidden="true" />
            {message.text}
          </p>
        )}
      </div>
    </form>
  );
}
