import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <header className="contact-hero-new">
        <div className="contact-hero-overlay">
          <h1>Let’s Start Your Journey</h1>
          <p>Your dream destination is just a message away. We’re here to help you plan, book, and explore.</p>
        </div>
      </header>

      {/* Contact Cards */}
      <section className="contact-cards-new">
        <div className="contact-card">
  <i className="fas fa-map-marker-alt"></i>
  <h3>Visit Us</h3>
  <p>
    123 Dream Lane,<br />
    Sector 21, Travel City,<br />
    New Delhi, India – 110045<br />
    <strong>Landmark:</strong> Near Central Mall
  </p>
</div>

<div className="contact-card">
  <i className="fas fa-envelope"></i>
  <h3>Email</h3>
  <p>
    <strong>General Inquiries:</strong><br />
    hello@traveldreams.com<br /><br />
    <strong>Support:</strong><br />
    support@traveldreams.com
  </p>
</div>

<div className="contact-card">
  <i className="fas fa-phone-alt"></i>
  <h3>Phone</h3>
  <p>
    <strong>Customer Support:</strong><br />
    +91 98765 43210<br /><br />
    <strong>International Helpline:</strong><br />
    +91 98765 43123
  </p>
</div>

<div className="contact-card">
  <i className="fas fa-clock"></i>
  <h3>Working Hours</h3>
  <p>
    <strong>Monday to Saturday:</strong><br />
    9:00 AM - 7:00 PM<br /><br />
    
    <strong>Public Holidays:</strong><br />
    Closed
  </p>
</div>

      </section>

      {/* Contact Form */}
      <section className="contact-form-wrapper">
        <form className="contact-form-new">
          <h2>Get In Touch</h2>
          <div className="form-group-new">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="form-group-new">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="form-group-new">
            <input type="tel" required />
            <label>Phone</label>
          </div>
          <div className="form-group-new">
            <textarea rows="5" required></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>❓ How do I book a trip?</h4>
          <p>You can fill out the contact form, call us, or visit our office. We’ll help you from planning to execution.</p>
        </div>
        <div className="faq-item">
          <h4>❓ Do you offer customized packages?</h4>
          <p>Yes! All our packages can be tailored based on your preferences, dates, and budget.</p>
        </div>
        <div className="faq-item">
          <h4>❓ Can I cancel or reschedule my booking?</h4>
          <p>Yes, we provide flexible cancellation and rescheduling options. Terms may vary per package.</p>
        </div>
      </section>

     
      
    </div>
  );
}
