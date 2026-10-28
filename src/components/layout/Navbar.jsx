import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import styles from './Navbar.module.css';

// 'top' (the hero) is tracked too, so no link is highlighted at the top of the page.
const sectionIds = ['top', ...navLinks.map((link) => link.id)];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 960 && setMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
        <nav className={`container ${styles.nav}`} aria-label="Primary">
          <a href="#top" className={styles.brand} onClick={closeMenu}>
            <span className={styles.logo} aria-hidden="true">
              {profile.initials}
            </span>
            <span className={styles.brandText}>
              <strong>{profile.name}</strong>
              <small>Shopify Developer</small>
            </span>
          </a>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? styles.active : undefined}
                  aria-current={active === link.id ? 'location' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Button href="#contact" size="sm" className={styles.hire}>
              Hire Me
            </Button>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Sibling of <header>: its backdrop-filter would otherwise trap this fixed panel. */}
      <div id="mobile-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <ul className="container">
          {navLinks.map((link, i) => (
            <li key={link.id} style={{ '--i': i }}>
              <a href={`#${link.id}`} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ '--i': navLinks.length }}>
            <Button href="#contact" size="lg" onClick={closeMenu} className={styles.mobileCta}>
              Hire Me
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
