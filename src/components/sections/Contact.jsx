import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import Reveal from '../ui/Reveal';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    {
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile.linkedin,
      icon: <LinkedInIcon size={18} />,
    },
    {
      label: 'GitHub',
      value: `@${profile.github.split('/').pop()}`,
      href: profile.github,
      icon: <GitHubIcon size={18} />,
    },
  ];

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.intro}>
          <p className={styles.eyebrow}>
            <span>06</span>Contact
          </p>
          <h2 className={styles.title}>
            Let’s build your next <span className="gradient-text">Shopify project.</span>
          </h2>
          <p className={styles.lead}>
            Tell me about your store, your goals and your timeline. I’ll get back to you with next steps and an
            honest view of how I can help.
          </p>

          <div className={styles.emailCard}>
            <span className={styles.channelIcon}>
              <Mail size={18} aria-hidden="true" />
            </span>
            <div className={styles.channelText}>
              <small>Email</small>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <button type="button" className={styles.copy} onClick={copyEmail} aria-label="Copy email address">
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <ul className={styles.channels}>
            {channels.map((channel) => (
              <li key={channel.label}>
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className={styles.channel}>
                  <span className={styles.channelIcon}>{channel.icon}</span>
                  <span className={styles.channelText}>
                    <small>{channel.label}</small>
                    <span>{channel.value}</span>
                  </span>
                  <ArrowUpRight size={16} className={styles.channelArrow} aria-hidden="true" />
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.location}>
            <MapPin size={15} aria-hidden="true" />
            {profile.location} · {profile.availability}
          </p>
        </Reveal>

        <Reveal className={styles.formCard} delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
