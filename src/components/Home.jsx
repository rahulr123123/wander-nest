import './Home.css';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const navigate = useNavigate();

    const handleCardClick = (packageId) => {
        navigate(`/packages/${packageId}`);
    };
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Explore the World with Us</h1>
                    <p>Customized travel experiences for every traveler, every dream.</p>
                    <button onClick={() => window.location.href = '/contact'}>Start Your Journey</button>
                </div>
            </section>

            {/* Popular Packages */}
            <section className="packages">
                <h2>Popular Packages</h2>
                <div className="grid">
                    <div className="card"><img src="/assets/bali.jpg" alt="Bali" /><h3>Bali Escape</h3><p>5 Nights / 6 Days</p><br /><button onClick={() => handleCardClick('bali')}>View Details</button></div>
                    <div className="card"><img src="/assets/paris.jpg" alt="Paris" /><h3>Paris Highlights</h3><p>4 Nights / 5 Days</p><br /><button onClick={() => handleCardClick('paris')}>View Details</button></div>
                    <div className="card"><img src="/assets/maldives.jpg" alt="Maldives" /><h3>Maldives Luxury</h3><p>6 Nights / 7 Days</p><br /><button onClick={() => handleCardClick('maldives')}>View Details</button></div>
                    <div className="card"><img src="/assets/bora.jpg" alt="Bora Bora" /><h3>Bora Bora</h3><p>6 Nights / 7 Days</p><br /><button onClick={() => handleCardClick('bora')}>View Details</button></div>
                    <div className="card"><img src="/assets/dubai.jpg" alt="Dubai" /><h3>Dubai</h3><p>6 Nights / 7 Days</p><br /><button onClick={() => handleCardClick('dubai')}>View Details</button></div>
                    <div className="card"><img src="/assets/rome.jpg" alt="Rome" /><h3>Rome</h3><p>6 Nights / 7 Days</p><br /><button onClick={() => handleCardClick('rome')}>View Details</button></div>
                    <div className="card"><img src="/assets/thailand.jpg" alt="Thailand" /><h3>Thailand</h3><p>6 Nights / 7 Days</p><br /><button onClick={() => handleCardClick('thailand')}>View Details</button></div>
                    <div className="card"><img src="/assets/captown.jpg" alt="Cape Town" /><h3>Cape Town</h3><p>6 Nights / 7 Days</p><br /><button onClick={() => handleCardClick('captown')}>View Details</button></div>
                </div>
            </section>

            {/* Why Choose Us */}
            {/* <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="grid">
          <div className="card"><img className='im' src="/assets/expert.jpg" /><h3>Expert Planning</h3><p>Tailored itineraries crafted by travel experts for seamless experiences.</p></div>
          <div className="card"> <img className='im' src="/assets/expert.jpg" /><h3>Affordable Prices</h3><p>Best deals without compromising quality, ensuring value for every trip.</p></div>
          <div className="card"><img className='im' src="/assets/expert.jpg" /><h3>24/7 Support</h3><p>Assistance whenever you need it, before, during, and after your trip.</p></div>
        </div>
      </section> */}

            {/* Destinations Gallery */}
            <section className="gallery">
                <h2>Destinations Gallery</h2>
                <p>Discover our top destinations and get inspired for your next adventure.</p>
                <div className="gallery-overlap-container">
                    <div className="gallery-overlap-item">
                        <img src="/assets/swiz.jpg" alt="Switzerland" />
                    </div>
                    <div className="gallery-overlap-item offset">
                        <img src="/assets/japan.jpg" alt="Japan" />
                    </div>
                    <div className="gallery-overlap-item">
                        <img src="/assets/egypt.jpg" alt="Egypt" />
                    </div>
                    <div className="gallery-overlap-item offset">
                        <img src="/assets/australia.jpg" alt="Australia" />
                    </div>
                </div>
            </section>




            {/* Travel Tips */}
            <section className="tips">
                <h2>✈️ Essential Travel Tips</h2>
                <p className="tips-subtitle">Make your journey smoother, safer, and more enjoyable with these practical tips.</p>
                <div className="tips-grid">
                    <div className="tips-card">
                        <h3>🧳 Smart Packing</h3>
                        <p>Pack light with versatile clothing, keep essentials in your carry-on, and use packing cubes to stay organized for stress-free travel.</p>
                    </div>
                    <div className="tips-card">
                        <h3>🛡️ Travel Insurance</h3>
                        <p>Travel with peace of mind by securing comprehensive insurance covering medical emergencies, trip cancellations, and lost luggage.</p>
                    </div>
                    <div className="tips-card">
                        <h3>🌍 Respect Local Cultures</h3>
                        <p>Learn basic local phrases, dress appropriately, and follow customs to show respect and enhance your travel experience.</p>
                    </div>
                </div>
            </section>



            <section className="offers">
                <h2>Special Holiday Offers</h2>
                <p>Grab our limited-time special deals for your dream destinations. Make your holidays affordable and memorable with our exclusive offers.</p>
                <div className="grid">
                    <div className="card"><img src="/assets/holiday.jpg" alt="Holiday Offer" /><h3>Summer Special</h3><p>Flat 20% off on all Europe packages booked before August 31st.</p></div>
                    <div className="card"><img src="/assets/beach.jpg" alt="Beach Offer" /><h3>Beach Getaways</h3><p>Book Maldives and get a free spa session for two during your stay.</p></div>
                    <div className="card"><img src="/assets/adven.jpg" alt="Adventure Offer" /><h3>Adventure Deals</h3><p>Book any adventure tour and get up to 15% off on your next trip.</p></div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="grid">
                    <div className="card"><p>“The best trip ever! Well-organized and memorable.”</p><h4>- Priya, India</h4></div>
                    <div className="card"><p>“Exceptional service, loved every moment!”</p><h4>- James, UK</h4></div>
                    <div className="card"><p>“Affordable packages and smooth planning.”</p><h4>- Li, Singapore</h4></div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="cta">
                <div className="cta-content">
                    <h2>Unlock Exclusive Holiday Offers!</h2>
                    <p>Plan your dream vacation with us and enjoy limited-time discounts, complimentary experiences, and personalized travel services. Let your next adventure begin with unbeatable value.</p>
                    <ul>
                        <li>✔️ Up to 30% off on early bookings</li>
                        <li>✔️ Free travel insurance for select packages</li>
                        <li>✔️ Complimentary city tours on select destinations</li>
                    </ul>
                    <button onClick={() => window.location.href = '/contact'}>Claim Your Offer Now</button>
                </div>
            </section>


        </div>
    );
}