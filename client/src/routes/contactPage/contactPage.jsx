import React from "react";
import "./contactPage.scss";
function ContactPage() {
  return (
    <div className="contactPage">
      <div className="section-header">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Get in touch!!</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-home"></i>
              </div>

              <div className="contact-info-content">
                <h4>Address</h4>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone"></i>
              </div>

              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>+91-891871xxxx</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <div className="contact-info-content">
                <h4>Email</h4>
                <p>adeshworkai@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="" id="contact-form">
              <h2>Send Message</h2>
              <div className="input-box">
                <input type="text" required="true" name="" />
                <span>Full Name</span>
              </div>

              <div className="input-box">
                <input type="email" required="true" name="" />
                <span>Email</span>
              </div>

              <div className="input-box">
                <textarea required="true" name=""></textarea>
                <span>Type your Message...</span>
              </div>

              <div className="input-box">
                <input type="submit" value="Send" name="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
