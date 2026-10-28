import { ArrowUpRight, Lock } from 'lucide-react';
import { asset } from '../../utils/asset';
import styles from './ProjectCard.module.css';

const getDomain = (url) => new URL(url).hostname.replace(/^www\./, '');

export default function ProjectCard({ project }) {
  const domain = getDomain(project.url);
  const hasScreenshot = project.screenshot !== false;
  const base = asset(`/projects/${project.slug}`);

  return (
    <a className={styles.card} href={project.url} target="_blank" rel="noopener noreferrer">
      <div className={styles.browser}>
        <div className={styles.bar} aria-hidden="true">
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.address}>
            <Lock size={10} strokeWidth={2.5} />
            {domain}
          </span>
        </div>

        <div className={styles.viewport}>
          {hasScreenshot ? (
            <img
              className={styles.shot}
              src={`${base}-600.webp`}
              srcSet={`${base}-600.webp 600w, ${base}-1200.webp 1200w`}
              sizes="(min-width: 1100px) 380px, (min-width: 700px) 50vw, 100vw"
              width="600"
              height="1000"
              loading="lazy"
              decoding="async"
              alt={`${project.name} homepage`}
            />
          ) : (
            <div className={styles.placeholder} aria-hidden="true">
              <span className={styles.placeholderName}>{project.name}</span>
              <span className={styles.placeholderDomain}>{domain}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          {project.platform && <span className={styles.platform}>{project.platform}</span>}
        </div>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        <span className={styles.visit}>
          Visit live site
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="visually-hidden">(opens in a new tab)</span>
        </span>
      </div>
    </a>
  );
}
