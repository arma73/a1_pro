import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

import styles from './breadcrumb.module.css';

export interface BreadcrumbProps {
  title: string | null;
}

const SlashIcon = () => (
  <svg
    className={styles.slash}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
  </svg>
);

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <nav className={styles.nav}>
      <ol className={styles.list}>
        <li>
          <Link to="/">
            <Home className={styles.icon} />
          </Link>
        </li>
        {title && (
          <li>
            <div className={styles.path}>
              <SlashIcon />
              <span className={styles.item}>{title}</span>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
