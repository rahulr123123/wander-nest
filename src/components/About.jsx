import './About.css';

export default function About() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>Explore the World with Us</h1>
        <p>Your journey starts here! At WanderWorld Travel, we bring you unforgettable experiences across the globe.</p>
      </section>

      {/* About Us */}
      <section className="about-intro">
  <div className="about-intro-content">
    <h2>🌍 Who We Are</h2>
    <p>
      <strong>WanderWorld Travel</strong> is a team of travel experts passionate about designing personalized journeys for curious explorers. Whether you’re a solo adventurer, a honeymooner, or planning a family getaway — we’re here to turn your dream trip into reality.
    </p>

    <ul className="about-features">
      <li>✅ 10+ Years of travel planning experience</li>
      <li>✅ Customized itineraries for every traveler</li>
      <li>✅ Thousands of happy clients across the globe</li>
      <li>✅ Trusted local & international partnerships</li>
      <li>✅ Expert team with local and international knowledge</li>
      <li>✅ Transparent pricing with no hidden costs</li>
      <li>✅ 4.9/5 average customer rating on Google Reviews</li>
    </ul>

    <p className="about-cta">
      Travel with confidence. Travel with WanderWorld. 🌟
    </p>
  </div>
</section>


      {/* Our Services */}
      <section className="about-services">
        <h2>What We Offer</h2>
        <div className="services-grid">
        
    
    <div className="service-item">
      <h3>✈️ Custom Tour Packages</h3>
      <p>Fully personalized itineraries crafted by travel experts based on your preferences, travel style, and pace. Whether you're seeking adventure, romance, or relaxation — we've got a plan for you.</p>
    </div>

    <div className="service-item">
      <h3>🏨 Flight & Hotel Booking</h3>
      <p>Enjoy competitive pricing with access to premium hotels and top-rated airlines. We take care of your bookings, upgrades, and requests — so you can travel worry-free.</p>
    </div>

    <div className="service-item">
      <h3>🛂 Visa & Documentation Support</h3>
      <p>Our visa experts guide you through paperwork, embassy appointments, and application processes. From tourist to business visas — we help you get approved quickly and easily.</p>
    </div>

    <div className="service-item">
      <h3>📞 24/7 Travel Support</h3>
      <p>From flight delays to last-minute changes, our global support team is available anytime during your trip. We're just a call or message away.</p>
    </div>

    <div className="service-item">
      <h3>🚗 Local Transfers & Transport</h3>
      <p>We provide reliable airport pickups, city tours, intercity transfers, and chauffeur-driven cars — for your comfort and convenience.</p>
    </div>

    <div className="service-item">
      <h3>🎟️ Activities & Experiences</h3>
      <p>Book local tours, cultural shows, adventure sports, cruises, safaris, and more — handpicked and verified for safety and enjoyment.</p>
    </div>

    <div className="service-item">
      <h3>🧳 Travel Insurance</h3>
      <p>We partner with trusted providers to offer travel insurance plans covering medical emergencies, cancellations, baggage loss, and more.</p>
    </div>

    <div className="service-item">
      <h3>🌐 Group & Corporate Travel</h3>
      <p>Specialized handling for corporate retreats, destination weddings, group tours, and MICE events. End-to-end support from planning to execution.</p>
    </div>

 

        </div>
      </section>

     

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Travel Experts</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="../assets/e1.jpg" alt="Rahul Sharma" />
            <h3>Rahul Sharma</h3>
            <p>Senior Travel Consultant</p>
          </div>
          <div className="team-member">
            <img src="../assets/e2.jpg" alt="Priya Mehta" />
            <h3>Priya Mehta</h3>
            <p>Tour Specialist</p>
          </div>
          <div className="team-member">
            <img src="../assets/e3.jpg" alt="Aman Gupta" />
            <h3>Aman Gupta</h3>
            <p>Customer Experience Lead</p>
          </div>
          <div className="team-member">
            <img src="../assets/e4.jpg" alt="Neha Verma" />
            <h3>Neha Verma</h3>
            <p>Destination Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}
