import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="hero">
        <img src="/images/about-hero.jpg" alt="Brand logo or image" />
        <h1>Our Story</h1>
        <p>The Doodle Co was born. From coffee shop dreams to vibrant reality, their clothes became more than fabric. They whispered tales of friendship, of ethical choices, of celebrating every thread of individuality.
            Their first pop-up was a tapestry of hope. The Doodle Co wasn't just fashion; it was a community, a whispered promise of a better tomorrow, one stitch at a time.
            Today, The Doodle Co is a symphony of success. Their clothes sing of passion and purpose, each garment a unique note in the ever-evolving melody of their dream. Wear them, and you become part of the song, your own story woven into the fabric of their beautiful, conscious creation.
            So, what's your next chapter? Join The Doodle Co, and let your story be stitched into theirs.
        </p>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <div className="value-cards">
          <div className="card">
            <img src="/images/quality-icon.svg" alt="Quality icon" />
            <h3>Quality</h3>
            <p>We are committed to using the highest quality materials and craftsmanship in our clothing.</p>
          </div>
          <div className="card">
            <img src="/images/sustainability-icon.svg" alt="Sustainability icon" />
            <h3>Sustainability</h3>
            <p>We believe in ethical and sustainable practices throughout our supply chain.</p>
          </div>
          <div className="card">
            <img src="/images/community-icon.svg" alt="Community icon" />
            <h3>Community</h3>
            <p>We are passionate about giving back to our community and supporting local businesses.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
