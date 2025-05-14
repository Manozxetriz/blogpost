import React from 'react';
import './section1.css';

const Section1 = () => {
  return (
    <section>
    
    
      <hr className="section1-divider" />
    
 <h1 className="section1-header">
  <span className="text-black mr-2">•</span>
  Insights & Innovations
  <span className="text-black mr-2">•</span>
</h1>


      <h3 className="section1-subheader">"Explore the Travel and Projects"</h3>
      <p className="section1-paragraph">
        "Welcome to my blog, where we dive deep into the most relevant and cutting-edge topics shaping the world today. From technology breakthroughs to emerging trends in business, design, and culture, our team of experts offers unique perspectives that are both insightful and thought-provoking. Join us as we explore the ever-evolving landscape of innovation and share actionable ideas to help you stay ahead of the curve. Whether you're an industry professional or simply curious, our goal is to provide valuable content that informs, educates, and inspires."
      </p>

      <figure className="section1-figure">
        <figcaption><em>Discover More</em></figcaption>
      </figure>
      <p className="section1-paragraph">
      "Feel free to browse through our carefully curated content and discover the latest insights on topics that matter. From practical tips to detailed analyses, each section is designed to offer something new. Explore, learn, and stay up-to-date with the trends that are shaping the future."
      </p>
  <div className="share-container">
        
        <div className="share-buttons">
          <div className="share-button">f</div>
          <div className="share-button">t</div>
          <div className="share-button">in</div>
          <div className="share-button">⎙</div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
