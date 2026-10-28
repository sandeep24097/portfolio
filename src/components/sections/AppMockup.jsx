import { Check, CloudUpload, History, RotateCcw, ShieldCheck } from 'lucide-react';
import styles from './AppMockup.module.css';

const resources = ['Products', 'Collections', 'Pages'];
const timeline = [
  { label: 'Restore point', when: 'Today' },
  { label: 'Restore point', when: 'Yesterday' },
  { label: 'Restore point', when: 'Last week' },
];

/** Decorative, illustrative dashboard for a backup & rollback app. */
export default function AppMockup({ name }) {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.titleBar}>
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.titleText}>Shopify admin · Apps · {name}</span>
      </div>

      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <History size={14} strokeWidth={2.4} />
            </span>
            <strong>{name}</strong>
          </div>
          <span className={styles.primaryBtn}>
            <CloudUpload size={13} strokeWidth={2.4} />
            Back up now
          </span>
        </header>

        <div className={styles.status}>
          <span className={styles.shield}>
            <ShieldCheck size={18} />
          </span>
          <div>
            <strong>Store data protected</strong>
            <small>Latest backup completed</small>
          </div>
          <span className={styles.pill}>
            <Check size={11} strokeWidth={3} /> Healthy
          </span>
        </div>

        <div className={styles.columns}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Resources</p>
            <ul className={styles.resources}>
              {resources.map((resource) => (
                <li key={resource}>
                  <span className={styles.checkDot}>
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span className={styles.resourceName}>{resource}</span>
                  <span className={styles.restoreBtn}>
                    <RotateCcw size={11} strokeWidth={2.4} />
                    Restore
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>Timeline</p>
            <ol className={styles.timeline}>
              {timeline.map((item, i) => (
                <li key={item.when} className={i === 0 ? styles.current : undefined}>
                  <span className={styles.node} />
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.when}</small>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
