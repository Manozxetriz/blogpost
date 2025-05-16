import './Work.css';
import image1 from '../../assets/1.jpeg'
import image2 from '../../assets/2.jpeg'
import Card from '../Card/Card';

const Work= () => (
<section>
  <hr className="section1-divider" />
  <h1 className="section1-header">
    <span className="text-black mr-2">•</span>
    The Journey So Far
    <span className="text-black mr-2">•</span>
  </h1>
    <p className="section1-paragraph">
          "Welcome to my blog, where we dive deep into the most relevant and cutting-edge topics shaping the world today. From technology breakthroughs to emerging trends in business, design, and culture, our team of experts offers unique perspectives that are both insightful and thought-provoking. Join us as we explore the ever-evolving landscape of innovation and share actionable ideas to help you stay ahead of the curve. Whether you're an industry professional or simply curious, our goal is to provide valuable content that informs, educates, and inspires."
        </p>
        <figure className="section1-figure">
          <figcaption><em>Recent</em></figcaption>
        </figure>
        <br/>
        <div className="portfolio-grid">
      <Card
        name="Design"
      
        title="Explore, learn, and stay up-to-date with the trends that are shaping the future.
        "
        
        imageClass="bg-1"
      />
      <Card
        name="Travel"
       
        title="Frontend Developer"
      
        imageClass="bg-2"
      />
      <Card
        name="Hoobies"
       
        title="UX Researcher"
       
        imageClass="bg-3"
      />
        </div>
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

export default Work;
