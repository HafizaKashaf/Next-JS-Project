// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className='text-white font-bold h-3 text-3xl '>Better Steps</h1>
      <ul>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/help">Help</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;