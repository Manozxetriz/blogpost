import React from 'react';
import './Blogs.css';
import image1 from '../../assets/3.jpeg'
const Blogs = () => {
  return (
   <section>
     <hr className="section1-divider" />
  <h1 className="section1-header">
    <span className="text-black mr-2">•</span>
    Insights
    <span className="text-black mr-2">•</span>
  </h1>
  
     <div>
     
  <div class="container1">
      <div className="blog-header">
        <div className="reading-time">
          <span className="dot"></span>
          Reading Time — 5 min
        </div>
        <div className="author-info">
          Written by Manoj Budhathoki · Aug 5, 2024
        </div>
      </div>

      <img
        src= {image1}
        alt="Featured"
        className="featured-image"
      />

      <div className="share-container">
      
        <div className="share-buttons">
          <div className="share-button">f</div>
          <div className="share-button">t</div>
          <div className="share-button">in</div>
          <div className="share-button">⎙</div>
        </div>
      </div>

      <div className="article-content">
        <p className="article-intro">
          Since Graduating as a computer engineer from Kathmandu gave me the foundation to explore different tech projects. Among them, this one has been especially meaningful due to its focus on current technology trends.
        </p>
        <p>Your article content would continue here...</p>
      </div>
    </div>
    </div>
   </section>
  );
};

export default Blogs;
