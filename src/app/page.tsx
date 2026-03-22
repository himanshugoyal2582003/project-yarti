'use client';
import { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Trust from './components/Trust/Trust';
import BookingForm from './components/BookingForm/BookingForm';
import doublesrc from '../../public/Doublesrc.png';
import Image from 'next/image';
import Features from './components/Features/Features';
import Explore from './components/Explore/explore';
import CarList from './components/CarList/CarList';






const ASSETS = {
  logo: 'https://www.figma.com/api/mcp/asset/14112d92-f166-4145-9101-243cfc2a56d1',
  heroBg: 'https://www.figma.com/api/mcp/asset/da05264f-dcd2-4d51-9177-23f8214ecfcb',
  appStore: 'https://www.figma.com/api/mcp/asset/17e8991a-b5d5-463e-8a2f-f5a3d31c64ad',
  playStore: 'https://www.figma.com/api/mcp/asset/6c26994c-40d8-4131-acef-51d474a5b5d4',
  carImg: 'https://www.figma.com/api/mcp/asset/14ebe60c-4303-480d-bac1-7dafe1bb658f',
  onewayImg: 'https://www.figma.com/api/mcp/asset/d89ec0a3-739f-43ec-915f-346ad3ebb514',
  cabCard: 'https://www.figma.com/api/mcp/asset/522c5a00-71f5-4478-b6e0-ed7480f08364',
  boltIcon: 'https://www.figma.com/api/mcp/asset/565b8221-7f72-4ae7-b809-23df5061c86e',
  peopleIcon: 'https://www.figma.com/api/mcp/asset/94a78543-5691-4847-8cd0-e560eb79f204',
  cabIcon: 'https://www.figma.com/api/mcp/asset/1d850c17-786f-4a8b-a509-cec126a76e68',
  budgetIcon: 'https://www.figma.com/api/mcp/asset/23002574-f50c-4871-9ddf-7a8d3b8cd1e9',
  mapPin: 'https://www.figma.com/api/mcp/asset/e0816c6c-84cd-44d4-bead-18d16baa7abd',
  durationIcon: 'https://www.figma.com/api/mcp/asset/6cdd76e4-edd8-4d44-bc77-c2afbf434129',
  easyOrder: 'https://www.figma.com/api/mcp/asset/3a7f9027-f0c5-4179-9c97-3cd21e1ff4f7',
  paidIcon: 'https://www.figma.com/api/mcp/asset/fd63128f-6ca9-4274-a5b8-89acb40b9a22',
  gpsIcon: 'https://www.figma.com/api/mcp/asset/e0aaaec5-a357-404c-8af9-eba7860c79bd',
  drivingIcon: 'https://www.figma.com/api/mcp/asset/53c64806-4783-4fa3-b4cb-ec3a990cf6c1',
  returnFareIcon: 'https://www.figma.com/api/mcp/asset/9723dad3-5897-4333-95b0-72bd40d15b72',
  footerBg: 'https://www.figma.com/api/mcp/asset/4de28ab7-113c-4364-a48a-b1d846ededc8',
};

function StarRating() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      ))}
    </div>
  );
}



const testimonials = [
  {
    text: "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real — significantly cheaper than a train. The car was clean, and the driver was professional. Highly recommend!",
    name: "Vikram Kulkarni",
    location: "Kalyan, Maharashtra",
  },
  {
    text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs everything was transparent and real-time. Complete peace of mind. Excellent service for my trip to Ayodhya!",
    name: "Rajesh Kumawat",
    location: "Kanpur, Uttar Pradesh",
  },
  {
    text: "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV — spacious and well-maintained. The driver was courteous and knowledgeable. It made our pilgrimage hassle-free and enjoyable.",
    name: "Anjali Mishra",
    location: "Gorakhpur, Uttar Pradesh",
  },
  {
    text: "As a frequent business traveler, finding a reliable one-way cab that doesn't charge for a return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking through the app make my life so much simpler. My go-to for intercity travel.",
    name: "Siddharth Vaidya",
    location: "Rohini, Delhi",
  },
];






const cities = [
  { name: 'Lucknow', href: 'https://www.yatricabs.com/lucknow/car-rental' },
  { name: 'Ayodhya', href: 'https://www.yatricabs.com/ayodhya/car-rental' },
  { name: 'Gorakhpur', href: 'https://www.yatricabs.com/gorakhpur/car-rental' },
  { name: 'Varanasi', href: 'https://www.yatricabs.com/varanasi/taxi-service' },
  { name: 'Allahabad (Prayagraj)', href: 'https://www.yatricabs.com/allahabad/car-rental' },
  { name: 'Kanpur', href: 'https://www.yatricabs.com/kanpur/car-rental' },
];











export default function HomePage() {
 






  
  return (
    <div className="page-wrapper">

      {/*  HERO  */}


      <div className="hero full-width">


        {/* Navbar */}

        <Navbar />

        {/* Background */}


        <div className="hero-bg">
          <img src={ASSETS.heroBg} alt="Road trip India" />
          <div className="hero-overlay" />
        </div>

        {/* Hero text */}

        <div className="hero-content">
          <h1 className="hero-title">
            India's{' '}
            <span className="highlight">Leading<br />One Way InterCity</span>
            {' '}Cab Service Provider
          </h1>
        </div>

        <BookingForm/>
        <Trust />
        
      </div>

      {/*  FEATURES  */}
      <Features />


      {/*  ABOUT */}
      <div className="about-section">
        <h2>India's Premier Intercity and Local Taxi Services</h2>
        <p>
          At Yatri Cabs, we pride ourselves on being a top-tier online oneway cab booking service, delivering reliable and premium intercity and local taxi services. With over a decade of experience, instead of self-drive car rental, we have become the leading driver-driven One Way car rental company in India, renowned for our extensive coverage across the country.
        </p>
      </div>













      {/*  YATRI  */}
      <div className="why-section">
        <div className="why-car">
          <img src={ASSETS.carImg} alt="Yatri Cab" style={{ transform: 'scaleY(-1) rotate(180deg)' }} />
        </div>
        <div className="why-content">
          <h2 className="why-title">Why <span className="g">Yatri</span> ?</h2>

          <div className="why-point">
            <div className="why-point-icon"><img src={ASSETS.boltIcon} alt="Fast" /></div>
            <div className="why-point-text">
              <h4>Fast response time</h4>
              <p>Experience the Best Car Rental Service with Driver for Local or Outstation Trips. Enjoy prompt response times and seamless car hire service, ensuring you get on the road quickly.</p>
            </div>
          </div>

          <div className="why-point">
            <div className="why-point-icon"><img src={ASSETS.peopleIcon} alt="Fleet" /></div>
            <div className="why-point-text">
              <h4>Vast fleet</h4>
              <p>We offer a wide range of rental cars including Sedans, SUVs, MUVs, premium Sedans, and Tempo Travellers to meet all your Car Hire needs.</p>
            </div>
          </div>

          <div className="why-point">
            <div className="why-point-icon"><img src={ASSETS.easyOrder} alt="Easy Order" /></div>
            <div className="why-point-text">
              <h4>Easy to order</h4>
              <p>Easily Book a Cab Online through our user-friendly website, mobile application, or by calling our customer support team.</p>
            </div>
          </div>

          <div className="why-point">
            <div className="why-point-icon"><img src={ASSETS.paidIcon} alt="Tariffs" /></div>
            <div className="why-point-text">
              <h4>Great tariffs</h4>
              <p>Rent a Car at the Lowest Rates! Our car hire tariffs are highly competitive compared to other operators. Book online cabs at the best prices with Yatri Car Rental.</p>
            </div>
          </div>
        </div>
      </div>


      {/*  CAR LIST  */}
      <CarList/>
      

      {/* CHOOSE ONE WAY */}
      <div className="oneway-section">
        <div className="oneway-text">
          <h2>
            Why choose AC Bus or AC Train for your{' '}
            <span>One-way Journey</span>?
          </h2>
          <p>
            Our oneway Car Rental service is cheaper than AC bus and 2-tier AC train ticket fares. It reduces your travel time, and you travel in your own private space, allowing you to fully enjoy your journey. Our one way taxi will come to your doorstep and take you to your desired destination. So, book your Cheapest one way cab from Lucknow to Gorakhpur or Varanasi to Ayodhya with our reliable Oneway car rental service with driver.
          </p>
        </div>
        <div className="oneway-img">
          <img src={ASSETS.onewayImg} alt="One Way Journey" />
        </div>
      </div>


      {/*  CAR RENTAL */}
      <div className="section">
        <div className="green-banner">
          <h2>Car Rental in India - Book Reliable Vehicles for All Your Needs</h2>
        </div>
        <div className="content-box" style={{ maxWidth: 1382 }}>
          <p>Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:</p>
          <br />
          <ul>
            <li><strong>1. Skilled Chauffeurs:</strong> Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads.</li>
            <li><strong>2. Dedicated Oneway Cab Service:</strong> We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel.</li>
            <li><strong>3. Well-Maintained Car Rental Fleet:</strong> Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride.</li>
            <li><strong>4. Transparent Pricing for Car Hire:</strong> Our GPS-based billing system ensures fair pricing by eliminating any chances of Kilometer tampering by the driver.</li>
            <li><strong>5. 24/7 Customer Support:</strong> Our customer care team is available round the clock to assist with any inquiries or concerns.</li>
          </ul>
        </div>
      </div>



      {/*  CHOOSE ONE  */}
      <div className="choose-oneway">
        <h2>Why Choose One way Cab?</h2>
        <div className="choose-cards">
          <div className="choose-list-card">
            <ul>
              <li>Instant Booking & Confirmation</li>
              <li>Confirmed Booking Immediately</li>
              <li>No Return Fare for One-Way Trip</li>
              <li>Clean & Professional Cab Services</li>
              <li>Transparent Billing with GPS based billing system</li>
            </ul>
          </div>

          <div className="choose-img">
            <img src={ASSETS.cabCard} alt="Cab service" />
          </div>

          <div className="choose-list-card">
            <ul>
              <li>Dedicated Cab just for you</li>
              <li>Pick-up from your house</li>
              <li>Drop to your desired destination</li>
              <li>Completed more than 20,000+ Oneway Trips</li>
              <li>Multiple Payment Option including Credit Card</li>
            </ul>
          </div>
        </div>

        <p className="discover-text">
          Discover affordable travel with our seamless{' '}
          <strong>intercity car rental</strong>{' '}
          in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!
        </p>
      </div>














      {/*  EXPLORE  */}
     <Explore />



















      {/* BUDGET/DISTANCE/DURATION */}
      <div className="for-any-section">
        <div className="for-any-item">
          <div className="for-any-icons">
            <img className="cab-icon" src={ASSETS.cabIcon} alt="Cab" />
            <img className="badge-icon" src={ASSETS.budgetIcon} alt="Budget" />
          </div>
          <div className="for-any-text">
            <h3>For Any Budget</h3>
            <p>Choose from hatchbacks, sedans, mini SUVs, prime SUVs, and mini buses like Tempo Travellers 12-seater to 25-seater to find a ride within your budget and at your convenience.</p>
          </div>
        </div>

        <div className="for-any-item">
          <div className="for-any-icons">
            <img className="cab-icon" src={ASSETS.cabIcon} alt="Cab" />
            <img className="badge-icon" src={ASSETS.mapPin} alt="Distance" />
          </div>
          <div className="for-any-text">
            <h3>For Any Distance</h3>
            <p>Book daily rides with multiple stops within the city or travel to your favourite destinations across the country with our Oneway or Round Trip Outstation Cab service.</p>
          </div>
        </div>

        <div className="for-any-item">
          <div className="for-any-icons">
            <img className="cab-icon" src={ASSETS.cabIcon} alt="Cab" />
            <img className="badge-icon" src={ASSETS.durationIcon} alt="Duration" />
          </div>
          <div className="for-any-text">
            <h3>For Any Duration</h3>
            <p>Plan a day out with our hourly-based packages for local city tours or book our Car Rental services with a driver for long or multiple-day trips.</p>
          </div>
        </div>
      </div>


















      {/*  CHOOSE */}
      <div className="section">
        <div className="green-banner">
          <h2>Why Choose Yatri Car Rental?</h2>
        </div>
        <div className="content-box" style={{ maxWidth: 1382 }}>
          <ul>
            <li>Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience.</li>
            <li><strong>Service You Can Trust</strong> – At Yatri Car Rental, we are dedicated to providing dependable services in India. We guarantee that we won't cancel any bookings without advance notification.</li>
            <li><strong>Safety is Our Priority</strong> – Safety and comfort are paramount at Yatri Car Rental. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads.</li>
            <li><strong>Expert Chauffeurs at Your Service</strong> – Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers.</li>
            <li><strong>Extensive Industry Experience</strong> – With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services.</li>
            <li><strong>Proven Track Record</strong> – We consistently receive Google ratings of 4.8 stars or higher, reflecting our commitment to customer comfort and satisfaction.</li>
          </ul>
        </div>
      </div>












      {/* ─── TESTIMONIALS ─── */}
      <div className="testimonials full-width">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-cards">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="card-top">
                <StarRating />
                {/* <GoogleLogo /> */}
              </div>
              <p className="card-text">{t.text}</p>
              <div className="card-author">
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>




















      {/*  APP */}
      <div className="app-driver-section">
        <div className="app-block">
          <div className="phone-mockups">
            <Image src={doublesrc} alt="App Store" width={400}  />
          </div>
          <div className="app-promo">
            <h2>
              GET YOUR
              <span>YATRI CABS</span>
              APP NOW!
            </h2>
            <p className="promo-code">
              Use code <strong>WELCOMEYATRI</strong> and get <strong>FLAT 05%</strong> OFF* on your first intercity RIDE
            </p>
            <div className="download-cta">
              <h4>Download Now!</h4>
              <div className="app-badges">
                <img src={ASSETS.appStore} alt="App Store" />
                <img src={ASSETS.playStore} alt="Play Store" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="driver-block">
          <h2>Become a <strong>Driver</strong> Partner</h2>
          <p>
            Join <strong>Yatri Car Rental</strong> and attach your car to our platform. Earn more by serving our passengers and benefit from our extensive customer base.
          </p>
          <button className="driver-btn">DOWNLOAD THE APP</button>
        </div>
      </div>












      {/*  CITIES */}
      <div className="cities-section">
        <span>Operational Cities :</span>
        {cities.map(c => (
          <a key={c.name} href={c.href} className="city-link">{c.name}</a>
        ))}
      </div>
















      {/* FOOTER  */}
      <footer
        className="footer full-width"
        style={{
          background: `url(${ASSETS.footerBg}) center/cover, #4a7437`,
        }}
      >
        <div className="footer-logo">
          <img src={ASSETS.logo} alt="Yatri Cabs" />
        </div>
        <div className="footer-links">
          {['Home', 'About', 'Services', 'Career', 'Contact', 'Privacy Policy', 'Terms & Condition'].map(l => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
        <p className="footer-copy">All Copyrights are reserved by YATRI CABS</p>
      </footer>

    </div>
  );
}
