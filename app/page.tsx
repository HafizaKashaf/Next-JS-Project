
// app/page.tsx
import React from 'react';
import styles from './styles/Home.module.css'
import HeroSection from './component/HeroSection/HeroSection';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

const Home = () => {
  return (
    <div className='bg-[url(https://thumbs.dreamstime.com/z/close-up-athletic-shoe-led-lights-high-tech-track-symbolizing-innovation-fitness-sports-technology-suggests-332062771.jpg?ct=jpeg)] '>
      <Navbar />
      <HeroSection />
      <div className={styles.container}>
        <h1>Welcome to Our Shoe Store!</h1>
        <p>Discover the perfect shoes for every occasion.</p>
        <button className={styles.ctaButton}>Shop Now</button>
      </div>
     <Footer/>
    </div>
  );
};

export default Home;