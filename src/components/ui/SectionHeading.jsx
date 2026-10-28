import Reveal from './Reveal';
import styles from './SectionHeading.module.css';

/** Eyebrow + title + optional description used at the top of each section. */
export default function SectionHeading({ index, eyebrow, title, description, align = 'left', children }) {
  return (
    <Reveal className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}>
      <p className={styles.eyebrow}>
        {index && <span className={styles.index}>{index}</span>}
        {eyebrow}
      </p>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </Reveal>
  );
}
