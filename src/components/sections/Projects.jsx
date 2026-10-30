import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { projects } from '../../data/projects';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const PAGE_SIZE = 9;
const platforms = [...new Set(projects.map((p) => p.platform).filter(Boolean))];
const countBy = (platform) => projects.filter((p) => p.platform === platform).length;

const parts = platforms.map((platform) => `${countBy(platform)} ${platform}`);
const summary =
  parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}` : parts.join('');

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.platform === filter)),
    [filter]
  );
  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  const selectFilter = (value) => {
    setFilter(value);
    setVisible(PAGE_SIZE);
  };

  const tabs = [
    { value: 'All', count: projects.length },
    ...platforms.map((platform) => ({ value: platform, count: countBy(platform) })),
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Shopify portfolio"
          title={
            <>
              Selected work, <span className="gradient-text">live on the web.</span>
            </>
          }
          description={`${projects.length} live projects — ${summary} websites. Hover a project to preview the page, and click to visit the live site.`}
        />

        <Reveal className={styles.tabs} role="group" aria-label="Filter projects by platform">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              className={styles.tab}
              aria-pressed={filter === tab.value}
              onClick={() => selectFilter(tab.value)}
            >
              {tab.value}
              <span className={styles.count}>{tab.count}</span>
            </button>
          ))}
        </Reveal>

        <ul className={styles.grid}>
          {shown.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>

        {remaining > 0 && (
          <div className={styles.more}>
            <Button
              variant="secondary"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              iconRight={<ChevronDown size={18} aria-hidden="true" />}
            >
              Show more projects ({remaining})
            </Button>
          </div>
        )}

        <Reveal className={styles.cta}>
          <p>
            <strong>Have a store that needs this level of care?</strong>
            <span>Let’s talk about your project and how I can help.</span>
          </p>
          <Button href="#contact" iconRight={<ArrowRight size={18} aria-hidden="true" />}>
            Hire Me
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
