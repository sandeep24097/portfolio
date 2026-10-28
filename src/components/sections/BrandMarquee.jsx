import { projects } from '../../data/projects';
import styles from './BrandMarquee.module.css';

/** Infinite scrolling strip of project names, linking into the portfolio. */
export default function BrandMarquee() {
  const names = projects.map((p) => p.name);

  return (
    <section className={styles.strip} aria-label="Brands featured in the portfolio">
      <p className={styles.label}>Projects for brands across fashion, beauty, automotive, fitness, wellness &amp; more</p>
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {[...names, ...names].map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= names.length ? 'true' : undefined}>
              <a href="#work" tabIndex={i >= names.length ? -1 : undefined}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
