import './Packages.css';
import { useParams, useNavigate } from 'react-router-dom';

export default function Packages() {
  const navigate = useNavigate();

  return (
    <div className="packages-container">
      
      <section className="packages-hero">
        <div className="hero-overlay">
          <h1>Discover Your Next Adventure</h1>
          <p className="tagline">Tailored travel experiences designed just for you.</p>

          <ul className="hero-highlights">
            <li>✔️ 100+ curated packages worldwide</li>
            <li>✔️ Customizable itineraries & flexible dates</li>
            <li>✔️ Trusted local guides & 24/7 support</li>
          </ul>

          <div className="hero-buttons">
            <button onClick={() => navigate('/packages')}>Explore Packages</button>
            <button className="secondary" onClick={() => navigate('/contact')}>Talk to an Expert</button>
          </div>
        </div>
      </section>

      <section className="packages-list">
        <div className="package-item">
          <img src="/assets/swis.jpg" alt="Switzerland" />
          <h3>Switzerland Explorer</h3>
          <ul>
            <li>🚞 Scenic train rides through the Swiss Alps</li>
            <li>🏞️ Visits to Lucerne, Zermatt & Interlaken</li>
            <li>🍫 Swiss chocolate tasting & local markets</li>
          </ul>
          <p className="duration">Duration: 7 Days / 6 Nights</p>
          <p className="price">From ₹1,59,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>

        <div className="package-item">
          <img src="/assets/thai.jpg" alt="Thailand" />
          <h3>Thailand Adventure</h3>
          <ul>
            <li>🌊 Island hopping: Phi Phi & James Bond Island</li>
            <li>🛕 Explore Bangkok’s temples & floating markets</li>
            <li>🛍️ Street food & vibrant night bazaars</li>
          </ul><br/>
          <p className="duration">Duration: 6 Days / 5 Nights</p>
          <p className="price">From ₹79,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>

        <div className="package-item">
          <img src="/assets/egyp.jpg" alt="Egypt" />
          <h3>Egypt Discovery</h3>
          <ul>
            <li>🏺 Guided tour of pyramids & the Sphinx</li>
            <li>🛳️ Nile cruise with full board meals</li><br/>
            <li>🕌 Ancient temples of Luxor & Karnak</li>
          </ul><br/>
          <p className="duration">Duration: 8 Days / 7 Nights</p>
          <p className="price">From ₹1,39,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>

        <div className="package-item">
          <img src="/assets/aus.jpg" alt="Australia" />
          <h3>Australia Highlights</h3>
          <ul>
            <li>🌆 Sydney city tour & Harbour Bridge climb</li>
            <li>🐠 Snorkeling in the Great Barrier Reef</li><br/>
            <li>🌿 Wildlife & rainforest adventures</li>
          </ul><br/>
          <p className="duration">Duration: 10 Days / 9 Nights</p>
          <p className="price">From ₹2,49,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>

        <div className="package-item">
          <img src="/assets/japan.jpg" alt="Japan" />
          <h3>Japan Cherry Blossom Tour</h3>
          <ul>
            <li>🌸 Witness cherry blossoms in Tokyo & Kyoto</li>
            <li>🚅 Ride the bullet train (Shinkansen)</li>
            <li>🍣 Traditional food & tea ceremonies</li>
          </ul>
          <p className="duration">Duration: 7 Days / 6 Nights</p>
          <p className="price">From ₹1,85,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>

        <div className="package-item">
          <img src="/assets/bal.jpg" alt="Bali" />
          <h3>Magical Bali Escape</h3>
          <ul>
            <li>🏝️ Beachfront resorts in Seminyak & Ubud</li>
            <li>🌋 Sunrise trek to Mount Batur</li>
            <li>💆 Spa, yoga, and temple visits</li>
          </ul>
          <p className="duration">Duration: 5 Days / 4 Nights</p>
          <p className="price">From ₹65,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>

        <div className="package-item">
          <img src="/assets/italy.jpg" alt="Italy" />
          <h3>Romantic Italy Getaway</h3>
          <ul>
            <li>🍕 Taste authentic Italian cuisine & wine</li>
            <li>🎨 Visit Rome, Venice, Florence & Vatican</li>
            <li>🚤 Gondola rides in Venice canals</li>
          </ul>
          <p className="duration">Duration: 9 Days / 8 Nights</p>
          <p className="price">From ₹2,10,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>

        <div className="package-item">
          <img src="/assets/ice.jpg" alt="Iceland" />
          <h3>Iceland Northern Lights Tour</h3>
          <ul>
            <li>❄️ Ice caves, glaciers & volcano treks</li>
            <li>🌌 Northern Lights hunting tours</li>
            <li>🛁 Relax in the Blue Lagoon</li>
          </ul>
          <p className="duration">Duration: 6 Days / 5 Nights</p>
          <p className="price">From ₹2,30,000 per person</p>
          <button onClick={() => navigate('/contact')}>Book Now</button>
        </div>
      </section>
    </div>
  );
}
