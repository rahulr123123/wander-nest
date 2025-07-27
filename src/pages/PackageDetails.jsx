import { useParams, useNavigate } from 'react-router-dom';
import './PackageDetails.css';

const packageData = {
  bali: {
    title: 'Bali Escape',
    image: '/assets/bali.jpg',
    description: 'Experience serene beaches, temple tours, water adventures, snorkeling, local cuisine, and cultural dance performances during your 5 nights and 6 days Bali escape. Discover lush rice terraces, hidden waterfalls, sunrise trekking on Mount Batur, traditional Balinese cooking classes, local art markets, and beachside yoga sessions while staying in carefully selected resorts that blend comfort with authentic island charm. This package offers guided cultural village tours, sunset views at Uluwatu Temple, relaxing spa experiences, and opportunities to engage with local communities, ensuring your Bali journey is immersive, relaxing, and inspiring.',
    price: '₹1,89,999',
    itinerary: [
      { day: 'Day 1', name: 'Ubud', image: '/assets/ubud.jpg' },
      { day: 'Day 2', name: 'Seminyak Beach', image: '/assets/semiyak.jpg' },
      { day: 'Day 3', name: 'Tanah Lot Temple', image: '/assets/tanah.jpg' },
      { day: 'Day 4', name: 'Nusa Penida Island', image: '/assets/neusa.jpg' },
      { day: 'Day 5', name: 'Local Markets & Dance', image: '/assets/market.jpg' },
      { day: 'Day 6', name: 'Relaxation & Departure', image: '/assets/dep.jpg' }
    ]
  },
  paris: {
    title: 'Paris Highlights',
    image: '/assets/paris.jpg',
    description: 'Explore the romantic city of Paris over 4 nights and 5 days with iconic views of the Eiffel Tower, strolls along the Seine River, visits to world-renowned art museums like the Louvre and Musée d Orsay, and cozy afternoons in charming Parisian cafés. Enjoy a scenic cruise at sunset, shopping on the Champs-Élysées, and a guided tour through the historic Montmartre district. This package blends culture, romance, and leisure perfectly for couples and solo travelers alike.',
    price: '₹1,19,999',
    itinerary: [
      { day: 'Day 1', name: 'Eiffel Tower', image: '/assets/effel.jpg' },
      { day: 'Day 2', name: 'Louvre Museum', image: '/assets/lourve.jpg' },
      { day: 'Day 3', name: 'Seine River Cruise', image: '/assets/river.jpg' },
      { day: 'Day 4', name: 'Montmartre', image: '/assets/mont.jpg' },
      { day: 'Day 5', name: 'Local Cafés & Departure', image: '/assets/dep.jpg' }
    ]
  },
  maldives: {
    title: 'Maldives Luxury',
    image: '/assets/maldives.jpg',
    description: 'Relax in luxurious overwater villas surrounded by turquoise lagoons during this 6-night, 7-day escape to the Maldives. Island hop across pristine atolls, enjoy guided snorkeling and diving sessions in crystal-clear waters teeming with vibrant marine life, and unwind with beachside massages and sunset cruises. Indulge in world-class dining, explore local island culture, and savor the perfect balance of adventure and serenity on this tropical paradise getaway.',
    price: '₹1,49,999',
    itinerary: [
      { day: 'Day 1', name: 'Maafushi', image: '/assets/maafu.jpg' },
      { day: 'Day 2', name: 'Male City Tour', image: '/assets/malecity.jpg' },
      { day: 'Day 3', name: 'Banana Reef Snorkeling', image: '/assets/banana.jpg' },
      { day: 'Day 4', name: 'Hulhumale Beach', image: '/assets/hulhul.jpg' },
      { day: 'Day 5', name: 'Island Hopping', image: '/assets/iland.jpg' },
      { day: 'Day 6', name: 'Spa & Relax', image: '/assets/spa.jpg' },
      { day: 'Day 7', name: 'Departure', image: '/assets/dep.jpg' }
    ]
  },
  bora: {
    title: 'Bora Bora Paradise',
    image: '/assets/bora.jpg',
    description: 'Immerse yourself in the natural beauty of Bora Bora during this 6-night, 7-day retreat featuring luxurious private overwater bungalows. Swim in crystal-clear lagoons, snorkel with colorful reef fish and manta rays, and enjoy sunset views over Mount Otemanu. Rejuvenate with spa treatments, romantic beachfront dinners, and traditional Polynesian performances. This dreamy island escape is perfect for couples and luxury travelers seeking tranquility and tropical elegance.',


    price: '₹1,79,999',
    itinerary: [
      { day: 'Day 1', name: 'Mount Otemanu', image: '/assets/mount.jpg' },
      { day: 'Day 2', name: 'Matira Beach', image: '/assets/matira.jpg' },
      { day: 'Day 3', name: 'Lagoonarium', image: '/assets/lagoor.jpg' },
      { day: 'Day 4', name: 'Coral Gardens', image: '/assets/coral.jpg' },
      { day: 'Day 5', name: 'Cultural Village Tour', image: '/assets/cultural.jpg' },
      { day: 'Day 6', name: 'Relaxation & Spa', image: '/assets/spa.jpg' },
      { day: 'Day 7', name: 'Departure', image: '/assets/dep.jpg' }
    ]
  },
  dubai: {
    title: 'Dubai Adventure',
    image: '/assets/dubai.jpg',
    description: 'Experience the dazzling fusion of tradition and luxury in Dubai during this 6-night, 7-day journey. Enjoy thrilling desert safaris with dune bashing and camel rides, followed by starlit dinners in Bedouin-style camps. Explore iconic landmarks like the Burj Khalifa, The Palm, and Dubai Marina. Indulge in world-class shopping at extravagant malls and traditional souks, and discover rich Emirati culture through guided heritage village and museum tours. This vibrant city getaway promises adventure, opulence, and unforgettable memories.',
    price: '₹1,99,999',
    itinerary: [
      { day: 'Day 1', name: 'Burj Khalifa', image: '/assets/burj.png' },
      { day: 'Day 2', name: 'Desert Safari', image: '/assets/desert.jpg' },
      { day: 'Day 3', name: 'Palm Jumeirah', image: '/assets/palm.jpg' },
      { day: 'Day 4', name: 'Dubai Marina', image: '/assets/marina.jpg' },
      { day: 'Day 5', name: 'Gold Souk', image: '/assets/gold.jpg' },
      { day: 'Day 6', name: 'Beach Day', image: '/assets/beach.jpg' },
      { day: 'Day 7', name: 'Departure', image: '/assets/dep.jpg' }
    ]
  },
  rome: {
    title: 'Rome Heritage Tour',
    image: '/assets/rome.jpg',
    description: 'Immerse yourself in the timeless charm of Rome with a 6-night, 7-day historical escape. Walk through centuries of history as you explore the mighty Colosseum, the awe-inspiring Vatican City, and the artistic treasures of the Sistine Chapel. Stroll along cobblestone streets lined with Renaissance architecture, quaint piazzas, and iconic fountains like the Trevi Fountain. Indulge in authentic Italian cuisine at local trattorias, sip espresso at charming cafés, and discover ancient ruins, hidden alleys, and lively Roman culture at every turn.',
    price: '₹1,09,999',
    itinerary: [
      { day: 'Day 1', name: 'Colosseum', image: '/assets/colo.jpg' },
      { day: 'Day 2', name: 'Vatican City', image: '/assets/vatican.jpg' },
      { day: 'Day 3', name: 'Trevi Fountain', image: '/assets/trevi.jpg' },
      { day: 'Day 4', name: 'Roman Forum', image: '/assets/forum.jpg' },
      { day: 'Day 5', name: 'Piazza Navona', image: '/assets/navona.jpg' },
      { day: 'Day 6', name: 'Local Cuisine Tour', image: '/assets/cuisine.jpg' },
      { day: 'Day 7', name: 'Departure', image: '/assets/dep.jpg' }
    ]
  },
  thailand: {
    title: 'Thailand Explorer',
    image: '/assets/thailand.jpg',
    description: 'Experience the vibrant spirit of Thailand over 6 nights and 7 days filled with adventure, culture, and relaxation. Explore ornate temples in Bangkok, witness the grandeur of the Grand Palace, and cruise along the Chao Phraya River. Unwind on the pristine beaches of Phuket and Krabi, perfect for sunbathing and snorkeling. Dive into the rich flavors of Thai cuisine with guided street food tours and cooking classes. Discover floating markets, enjoy traditional Thai massages, and embrace the warm hospitality of the locals throughout your unforgettable journey',
    price: '₹1,89,999',
    itinerary: [
      { day: 'Day 1', name: 'Bangkok Temples', image: '/assets/bangkok.jpg' },
      { day: 'Day 2', name: 'Phuket Beaches', image: '/assets/phuket.jpg' },
      { day: 'Day 3', name: 'Chiang Mai Temples', image: '/assets/chiangmai.jpg' },
      { day: 'Day 4', name: 'Phi Phi Islands', image: '/assets/phiphi.jpg' },
      { day: 'Day 5', name: 'Floating Market', image: '/assets/floating.jpg' },
      { day: 'Day 6', name: 'Thai Cooking Class', image: '/assets/cooking.jpg' },
      { day: 'Day 7', name: 'Departure', image: '/assets/dep.jpg' }
    ]
  },
  captown: {
    title: 'Cape Town Discovery',
    image: '/assets/captown.jpg',
    description: 'Discover the breathtaking beauty of Cape Town over 6 nights and 7 days, where rugged mountains meet golden beaches and rolling vineyards. Ride a cable car up Table Mountain for panoramic views, stroll through the vibrant streets of Bo-Kaap, and relax along the scenic shores of Camps Bay. Explore the Cape Winelands with guided tastings in Stellenbosch and Franschhoek. Visit Robben Island, take a coastal drive along Chapman’s Peak, and encounter wildlife at Boulders Beach and Cape Point. A perfect blend of nature, culture, and culinary delights awaits in South Africa’s most iconic city.',
    price: '₹99,999',
    itinerary: [
      { day: 'Day 1', name: 'Table Mountain', image: '/assets/table.jpg' },
      { day: 'Day 2', name: 'Cape Point', image: '/assets/capepoint.jpg' },
      { day: 'Day 3', name: 'V&A Waterfront', image: '/assets/waterfront.jpg' },
      { day: 'Day 4', name: 'Boulders Beach', image: '/assets/boulders.jpg' },
      { day: 'Day 5', name: 'Winelands Tour', image: '/assets/wine.jpg' },
      { day: 'Day 6', name: 'Robben Island', image: '/assets/robben.jpg' },
      { day: 'Day 7', name: 'Departure', image: '/assets/dep.jpg' }
    ]
  }
};



export default function PackageDetails() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const pack = packageData[packageId];

  if (!pack) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        Package not found. Please check the URL or return to the homepage.
      </div>
    );
  }

  return (
    <div className="package-details-container">
      <img src={pack.image} alt={pack.title} className="package-image" />

      <div className="package-content">
        <h1>{pack.title}</h1>
        <p>{pack.description}</p>
        <p><strong>Price:</strong> {pack.price}</p>

        <div className="places-section">
          <h3>Itinerary:</h3>
          <div className="places-grid">
            {pack.itinerary.map((place, index) => (
              <div key={index} className="place-card">
                <img src={place.image} alt={place.name} className="place-image" />
                <p><strong>{place.day}:</strong> {place.name}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => navigate('/contact')}>
          Book This Package
        </button>
      </div>

      
    </div>
  );
}