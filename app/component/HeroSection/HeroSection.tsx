import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h2 className='text-blue-950 font-bold text-3xl'>Step into Style</h2>
      <p className='text-black'>Find your perfect fit with our exclusive shoe collection.</p>
      
        <button className={styles.heroButton}>Explore Collection</button>

        
     
    </div>
  );
};

export default HeroSection;