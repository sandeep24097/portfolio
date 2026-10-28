import { ArrowUpRight, Check } from 'lucide-react';
import { profile } from '../../data/profile';
import { asset } from '../../utils/asset';
import { GitHubIcon } from '../ui/BrandIcons';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import styles from './About.module.css';

const specializations = [
  'Shopify Theme Development',
  'Shopify Liquid',
  'Custom Store Development',
  'Shopify App Development',
  'Performance Optimization',
];

const facts = [
  { label: 'Role', value: profile.roles.join(' & ') },
  { label: 'Experience', value: `${profile.experience} years in Shopify development` },
  { label: 'Focus', value: 'Themes · Custom stores · Apps · Speed' },
  { label: 'Based in', value: `${profile.location} · working with clients worldwide` },
  { label: 'Status', value: profile.availability, highlight: true },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.layout}`}>
        <div>
          <SectionHeading
            index="01"
            eyebrow="About me"
            title={
              <>
                Shopify specialist, <span className="gradient-text">full-stack</span> by craft.
              </>
            }
          />

          <Reveal className={styles.body}>
            <p>
              For more than {profile.experience} years I’ve specialized in Shopify development — building custom
              themes in Liquid, shaping stores around how a brand actually sells, and fixing the issues that quietly
              cost merchants sales.
            </p>
            <p>
              My background runs across the full stack. On the storefront I work with Liquid, JavaScript and React;
              behind it I build with Node.js, Express and MongoDB against the Shopify Admin API. That range is what
              lets me take a project from design to a fast, maintainable store — or a custom Shopify app — without
              handing it off halfway.
            </p>
            <p>
              I care about clean code, clear communication and stores that are easy for your team to run long after
              launch.
            </p>
          </Reveal>

          <Reveal as="ul" className={styles.specs} delay={100} aria-label="Specializations">
            {specializations.map((item) => (
              <li key={item}>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className={styles.card} delay={150}>
          <div className={styles.cardHeader}>
            {profile.photo ? (
              <img src={asset(profile.photo)} alt="" width="56" height="56" loading="lazy" className={styles.avatar} />
            ) : (
              <span className={`${styles.avatar} ${styles.initials}`} aria-hidden="true">
                {profile.initials}
              </span>
            )}
            <div>
              <p className={styles.cardName}>{profile.name}</p>
              <p className={styles.cardRole}>{profile.role}</p>
            </div>
          </div>

          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd className={fact.highlight ? styles.highlight : undefined}>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a className={styles.githubLink} href={profile.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={18} />
            <span>View my GitHub</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
