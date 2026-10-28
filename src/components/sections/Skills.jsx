import { skillGroups } from '../../data/skills';
import { trackSpotlight } from '../../utils/spotlight';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import styles from './Skills.module.css';

export default function Skills() {
  const [primary, ...secondary] = skillGroups;

  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Technical skills"
          title={
            <>
              The stack behind <span className="gradient-text">every build.</span>
            </>
          }
          description="Deep Shopify platform expertise, backed by the frontend and backend skills to build anything a store needs."
        />

        <div className={styles.bento}>
          <Reveal className={`${styles.card} ${styles.primary}`} onMouseMove={trackSpotlight}>
            <GroupHeader group={primary} />
            <ul className={styles.tiles}>
              {primary.skills.map((skill) => (
                <li key={skill.name} className={styles.tile}>
                  <span className={styles.tileIcon}>
                    <Icon name={skill.icon} size={20} />
                  </span>
                  <span>
                    <strong>{skill.name}</strong>
                    {skill.note && <small>{skill.note}</small>}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {secondary.map((group, i) => (
            <Reveal
              key={group.id}
              className={styles.card}
              delay={(i + 1) * 100}
              onMouseMove={trackSpotlight}
            >
              <GroupHeader group={group} />
              <ul className={styles.list}>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className={styles.listIcon}>
                      <Icon name={skill.icon} size={17} />
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GroupHeader({ group }) {
  return (
    <div className={styles.groupHeader}>
      <span className={styles.groupIcon}>
        <Icon name={group.icon} size={22} />
      </span>
      <div>
        <h3>{group.title}</h3>
        <p>{group.description}</p>
      </div>
    </div>
  );
}
