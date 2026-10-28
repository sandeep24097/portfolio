import { ArrowRight, ArrowUpRight, History } from 'lucide-react';
import { featuredApp as app } from '../../data/apps';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import AppMockup from './AppMockup';
import styles from './AppShowcase.module.css';

export default function AppShowcase() {
  return (
    <section id="app" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Shopify app development"
          title={
            <>
              Beyond themes: <span className="gradient-text">my own Shopify app.</span>
            </>
          }
          description="Product thinking and full-stack Shopify engineering, applied to a real merchant problem."
        />

        <Reveal className={styles.panel}>
          <div className={styles.info}>
            <div className={styles.appId}>
              <span className={styles.appIcon} aria-hidden="true">
                <History size={26} strokeWidth={2} />
              </span>
              <div>
                <span className={styles.appTag}>Shopify App</span>
                <h3 className={styles.appName}>{app.name}</h3>
              </div>
            </div>

            <p className={styles.description}>{app.description}</p>

            <ul className={styles.features}>
              {app.features.map((feature) => (
                <li key={feature.title}>
                  <span className={styles.featureIcon}>
                    <Icon name={feature.icon} size={18} />
                  </span>
                  <span>
                    <strong>{feature.title}</strong>
                    <small>{feature.text}</small>
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.ctas}>
              {app.appUrl && (
                <Button href={app.appUrl} external iconRight={<ArrowUpRight size={18} aria-hidden="true" />}>
                  View on Shopify App Store
                </Button>
              )}
              <Button
                href="#contact"
                variant={app.appUrl ? 'secondary' : 'primary'}
                iconRight={<ArrowRight size={18} aria-hidden="true" />}
              >
                Discuss a custom app
              </Button>
              {!app.appUrl && <span className={styles.soon}>App Store listing coming soon</span>}
            </div>
          </div>

          <div className={styles.visual}>
            {app.image ? (
              <img
                className={styles.screenshot}
                src={app.image}
                alt={`${app.name} dashboard`}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <figure className={styles.mockupFigure}>
                <AppMockup name={app.shortName} />
                <figcaption>Illustrative interface preview</figcaption>
              </figure>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
