import { ArrowRight, Check } from 'lucide-react';
import { process, services } from '../../data/services';
import { trackSpotlight } from '../../utils/spotlight';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Services"
          title={
            <>
              How I can help <span className="gradient-text">your store grow.</span>
            </>
          }
          description="From a brand-new build to a single stubborn bug — focused Shopify services with clear communication from day one."
        />

        <ul className={styles.grid}>
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 90}>
              <article className={styles.card} onMouseMove={trackSpotlight}>
                <span className={styles.icon}>
                  <Icon name={service.icon} size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.points}>
                  {service.points.map((point) => (
                    <li key={point}>
                      <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" delay={180}>
            <div className={`${styles.card} ${styles.ctaCard}`}>
              <h3>Need something else?</h3>
              <p>Migrations, integrations, audits or a long-term Shopify partner — tell me what you need.</p>
              <Button href="#contact" iconRight={<ArrowRight size={18} aria-hidden="true" />}>
                Contact Me
              </Button>
            </div>
          </Reveal>
        </ul>

        <Reveal className={styles.process}>
          <h3 className={styles.processTitle}>How we’ll work together</h3>
          <ol className={styles.steps}>
            {process.map((item) => (
              <li key={item.step}>
                <span className={styles.step}>{item.step}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
