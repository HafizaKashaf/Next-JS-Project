// component/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css'; // Go up two levels to access styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Shoe Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;