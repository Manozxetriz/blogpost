import React from 'react';
import heroImage from '../../assets/1.jpeg'; 
import './hero.css'
const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-between px-6 py-12">
      
      <div className="flex flex-col justify-center max-w-lg space-y-4">
        <h1 className="text-5xl  text-gray-900">Code & Wander:</h1>
         <h1 className="text-2xl  text-gray-900"> Tech & Travel, Design & Discovery</h1>
        <p className="text-lg text-gray-900">
          Explore amazing content, projects, and more.
          <br/>
         Discover how the latest trends and technologies are shaping the way we build modern, performant, and user-friendly web applications. This post dives into best practices, frameworks, and tools every developer should know.
        </p>
      <div class="button-container">
  <button class="button type1">
    <span class="btn-txt">Hello</span>
  </button>
  <button class="button type1">
    <span class="btn-txt">Hello</span>
  </button>
</div>
      </div>

    
      <div className="flex-shrink-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-[400px] h-auto rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
