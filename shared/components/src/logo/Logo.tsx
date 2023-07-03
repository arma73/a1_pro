import { Ghost } from 'lucide-react';

import styles from './logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <Ghost className={styles.icon} />
    </div>
  );
};

export default Logo;
