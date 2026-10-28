import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
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
          description={`${projects.length} Shopify stores and client websites I’ve worked on. Hover a project to preview the page, and click to visit the live site.`}
        />

        <ul className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={(i % 3) * 90}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </ul>

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
