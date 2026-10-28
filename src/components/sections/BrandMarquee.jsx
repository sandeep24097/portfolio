import { projects } from '../../data/projects';
import styles from './BrandMarquee.module.css';

/** Infinite scrolling strip of project names, linking into the portfolio. */
export default function BrandMarquee() {
  const names = projects.map((p) => p.name);

  return (
    <section className={styles.strip} aria-label="Brands featured in the portfolio">
      <p className={styles.label}>Projects for brands across beauty, wellness, fashion, food, pets, automotive &amp; more</p>
      <div className={styles.viewport}>
        {/* Duration scales with the list so the scroll speed stays constant. */}
        <ul className={styles.track} style={{ '--duration': `${names.length * 4.2}s` }}>
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
