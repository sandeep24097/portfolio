import { ArrowUp } from 'lucide-react';
import { navLinks, profile } from '../../data/profile';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo} aria-hidden="true">
              {profile.initials}
            </span>
            <div>
              <p className={styles.name}>{profile.name}</p>
              <p className={styles.role}>{profile.roles.join(' · ')}</p>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
              <GitHubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <a href="#top" className={styles.backToTop}>
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
