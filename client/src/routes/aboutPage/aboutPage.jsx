import './aboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>About Us</h1>
        <p>Your Trusted Real Estate Partner</p>
      </div>
      <div className="content-section">
        <div className="image-section">
          <img src="/home-bg.png" alt="About Us" />
        </div>
        <div className="text-section">
          <h2>Our Mission</h2>
          <p>
            At EstateEase, we are committed to helping you find your dream home
            with ease and confidence. Our dedicated team of professionals works
            tirelessly to connect buyers with the perfect properties.
          </p>

          <h2>Our Vision</h2>
          <p>
            We envision a world where finding a home is as easy as a few clicks.
            We aim to simplify the real estate process through technology,
            transparency, and trust.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Extensive Property Listings</li>
            <li>Expert Real Estate Agents</li>
            <li>Customer-Centric Approach</li>
            <li>Innovative Tools & Technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
