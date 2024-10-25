// app/about/page.tsx
import React from 'react';


const About = () => {
  return (
    <div className="bg-[url(https://thumbs.dreamstime.com/z/vibrant-image-showcases-high-energy-running-shoe-surrounded-glowing-red-blue-flames-sparks-symbolizing-speed-power-339391437.jpg?ct=jpeg)] p-64 text-center ">
      <h1 className='text-2xl text-black font-bold'>About Us</h1>
      <p className='text-black'>At Our Shoe Store, we are passionate about footwear. Our mission is to provide high-quality shoes that blend comfort with style.</p>
      <h2  className='text-2xl text-black font-bold '>Our Story</h2>
      <p className='text-black '>Founded in 2024, we have curated a collection of the best shoes for every occasion, from athletic to formal.</p>
      <h2  className='text-2xl  text-black font-bold'>Meet Our Team</h2>
      <p className='text-black'>We are a dedicated team of footwear enthusiasts committed to helping you find the perfect pair of shoes.</p>
    </div>
  );
};

export default About;
