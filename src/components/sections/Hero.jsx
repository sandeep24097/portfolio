import { useState } from 'react';
import { ArrowRight, Gauge, ShoppingBag } from 'lucide-react';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { asset } from '../../utils/asset';
import Button from '../ui/Button';
import { GitHubIcon } from '../ui/BrandIcons';
import styles from './Hero.module.css';

const stats = [
  { value: profile.experience, label: 'Years in Shopify development' },
  { value: projects.length, label: 'Live projects showcased' },
  { value: 1, label: 'Custom Shopify app built' },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={`${styles.glow} ${styles.glowA}`} />
        <div className={`${styles.glow} ${styles.glowB}`} />
      </div>

      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={`${styles.status} ${styles.enter}`}>
            <span className={styles.pulse} aria-hidden="true" />
            {profile.availability}
          </p>

          <p className={`${styles.kicker} ${styles.enter}`} style={{ '--d': '80ms' }}>
            {profile.roles.join(' · ')}
          </p>

          <h1 id="hero-title" className={`${styles.title} ${styles.enter}`} style={{ '--d': '140ms' }}>
            Premium Shopify stores &amp; apps, <span className="gradient-text">engineered to perform.</span>
          </h1>

          <p className={`${styles.lead} ${styles.enter}`} style={{ '--d': '220ms' }}>
            Hi, I’m <strong>{profile.name}</strong> — a Shopify developer with {profile.experience} years of
            experience in custom theme development, Shopify Liquid, app development and performance
            optimization. {profile.intro}
          </p>

          <div className={`${styles.ctas} ${styles.enter}`} style={{ '--d': '300ms' }}>
            <Button href="#contact" size="lg" iconRight={<ArrowRight size={18} aria-hidden="true" />}>
              Hire Me
            </Button>
            <Button href="#work" size="lg" variant="secondary">
              View Projects
            </Button>
            <a
              className={styles.github}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GitHubIcon size={20} />
            </a>
          </div>

          <dl className={`${styles.stats} ${styles.enter}`} style={{ '--d': '380ms' }}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className="visually-hidden">{stat.label}</dt>
                <dd>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel} aria-hidden="true">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = profile.photo && !photoFailed;

  return (
    <div className={`${styles.visual} ${styles.enter}`} style={{ '--d': '200ms' }}>
      <div className={styles.portraitFrame}>
        <div className={styles.portrait}>
          {showPhoto ? (
            <img
              src={asset(profile.photo)}
              alt={`Portrait of ${profile.name}`}
              width="400"
              height="400"
              fetchpriority="high"
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            <span className={styles.monogram} aria-hidden="true">
              {profile.initials}
            </span>
          )}
        </div>

        <div className={`${styles.badge} ${styles.badgeTop}`} aria-hidden="true">
          <span className={styles.badgeIcon}>
            <ShoppingBag size={16} />
          </span>
          <span>
            <strong>Shopify &amp; Plus</strong>
            <small>Themes · Apps · Liquid</small>
          </span>
        </div>

        <div className={`${styles.badge} ${styles.badgeRight}`} aria-hidden="true">
          <span className={styles.badgeIcon}>
            <Gauge size={16} />
          </span>
          <span>
            <strong>Speed optimization</strong>
            <small>Core Web Vitals</small>
          </span>
        </div>

        <CodeCard />
      </div>
    </div>
  );
}

/** Decorative Liquid snippet. */
function CodeCard() {
  return (
    <figure className={styles.code} aria-hidden="true">
      <div className={styles.codeBar}>
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.codeFile}>sections/featured-products.liquid</span>
      </div>
      <pre>
        <code>
          <span className={styles.tTag}>{'{% for '}</span>
          <span className={styles.tVar}>product</span>
          <span className={styles.tTag}>{' in '}</span>
          <span className={styles.tVar}>collection.products</span>
          <span className={styles.tTag}>{' %}'}</span>
          {'\n  '}
          <span className={styles.tTag}>{'{% render '}</span>
          <span className={styles.tStr}>'product-card'</span>
          <span className={styles.tTag}>{', '}</span>
          <span className={styles.tVar}>product</span>
          <span className={styles.tTag}>: </span>
          <span className={styles.tVar}>product</span>
          <span className={styles.tTag}>{' %}'}</span>
          {'\n'}
          <span className={styles.tTag}>{'{% endfor %}'}</span>
        </code>
      </pre>
    </figure>
  );
}
