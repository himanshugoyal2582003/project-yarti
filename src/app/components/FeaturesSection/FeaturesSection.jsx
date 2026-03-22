import "../../globals.css";
import Image from "next/image";
import logo from "../../../../public/Group 1686551986 (1).png";


export default function LandingSections() {
  const carTypes = [
    { type: 'AC Sedans', model: 'Etios, Amaze, Dzire etc.', passengers: '4 Pax', ideal: 'Comfortable trips with small families', fare: 'Rs.11/KM' },
    { type: 'AC Hatchbacks', model: 'Wagon R, Celerio, Micra etc.', passengers: '4 Pax', ideal: 'Budget trips over short distances', fare: 'Rs.11/KM' },
    { type: 'AC SUV', model: 'Ertiga, Xylo etc.', passengers: '6-7 Pax', ideal: 'Premium trips with large families', fare: 'Rs.13/KM' },
  ];

  const leftPoints = [
    'Instant Booking & Confirmation',
    'Confirmed Booking Immediately',
    'No Return Fare For One-Way Trip',
    'Clean & Professional Cab Services',
    'Transparent Billing With GPS Based Billing System',
  ];

  const rightPoints = [
    'Pick-Up From Your House',
    'Dedicated Cab Just For You',
    'Drop To Your Desired Destination',
    'Completed More Than 20,000+ Oneway Trips',
    'Multiple Payment Option Including Credit Card.',
  ];

  const testimonials = [
    {
      name: 'Vikram Kulkarni', location: 'Kalyan, Maharashtra', stars: 5,
      text: 'I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!',
    },
    {
      name: 'Rajesh Kumawat', location: 'Kanpur, Uttar Pradesh', stars: 5,
      text: 'The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, billing was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!',
    },
    {
      name: 'Anjali Mishra', location: 'Gorakhpur, Uttar Pradesh', stars: 5,
      text: 'Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable.',
    },
    {
      name: 'Siddharth Vaidya', location: 'Noida, Delhi', stars: 5,
      text: "As a frequent business traveler, finding a reliable one-way cab service that doesn't charge for a return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler.",
    },
  ];

  const cities = ['Lucknow', 'Ayodhya', 'Gorakhpur', 'Varanasi', 'Allahabad (Prayagraj)', 'Kanpur'];

  return (
    <>
      {/* ── Car Types Table ── */}
      <section className="car-types">
        <div className="car-table-wrap">
          <table className="car-table">
            <thead>
              <tr>
                <th>CAR TYPE</th>
                <th>MODEL INCLUDES</th>
                <th>PASSENGERS</th>
                <th>IDEAL FOR</th>
                <th>FARE</th>
              </tr>
            </thead>
            <tbody>
              {carTypes.map((car, i) => (
                <tr key={i}>
                  <td>{car.type}</td>
                  <td>{car.model}</td>
                  <td>{car.passengers}</td>
                  <td>{car.ideal}</td>
                  <td className="fare-cell">{car.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Why AC Bus or AC Train ── */}
      <section className="why-bus">
        <div className="why-bus-inner">
          <div className="why-bus-text">
            <h2>WHY CHOOSE AC BUS OR AC TRAIN<br />FOR YOUR <span className="green-text">ONE-WAY JOURNEY?</span></h2>
            <p>Our Oneway Car Rental Service Is Cheaper Than AC Bus And 2-Tier AC Train Ticket Fares. It Reduces Your Travel Time, And You Travel In Your Own Private Space, Allowing You To Fully Enjoy Your Journey. Our One Way Taxi Will Come To Your Doorstep And Take You To Your Desired Destination. So, Book Your Cheapest One Way Cab From Lucknow To Gorakhpur Or Varanasi To Ayodhya With Our Reliable Oneway Car Rental Service With Driver. Experience The Convenience Of Our Taxi Service, Where You Can Rent A Car Effortlessly And Enjoy Seamless Cab Booking. Choose Our Car Hire Option For A Hassle-Free And Comfortable Travel Experience. We Offer Outstation Cab And Intercity Travel Services, Ensuring A Smooth And Enjoyable Luxury Ride Wherever You Need To Go.</p>
          </div>
          <div className="why-bus-img">
            <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
              <rect x="60" y="20" width="110" height="190" rx="16" fill="#f0f4ff" stroke="#cdd5e0" strokeWidth="2"/>
              <rect x="70" y="35" width="90" height="155" rx="8" fill="#e8eef8"/>
              <line x1="80" y1="70" x2="150" y2="70" stroke="#b0bec5" strokeWidth="1.5"/>
              <line x1="80" y1="90" x2="150" y2="90" stroke="#b0bec5" strokeWidth="1.5"/>
              <line x1="80" y1="110" x2="150" y2="110" stroke="#b0bec5" strokeWidth="1.5"/>
              <line x1="100" y1="50" x2="100" y2="175" stroke="#b0bec5" strokeWidth="1.5"/>
              <line x1="130" y1="50" x2="130" y2="175" stroke="#b0bec5" strokeWidth="1.5"/>
              <path d="M95 80 Q115 100 115 130 Q115 155 130 165" stroke="#4caf50" strokeWidth="2.5" strokeDasharray="5,3" fill="none"/>
              <circle cx="95" cy="78" r="7" fill="#ff5722"/>
              <circle cx="95" cy="78" r="3" fill="white"/>
              <circle cx="130" cy="165" r="7" fill="#ff9800"/>
              <circle cx="130" cy="165" r="3" fill="white"/>
              <rect x="105" y="118" width="22" height="14" rx="3" fill="#4caf50"/>
              <rect x="108" y="115" width="16" height="8" rx="2" fill="#81c784"/>
              <circle cx="110" cy="133" r="3" fill="#333"/>
              <circle cx="124" cy="133" r="3" fill="#333"/>
              <ellipse cx="115" cy="225" rx="30" ry="15" fill="#ffcc80"/>
              <rect x="210" y="80" width="30" height="100" rx="3" fill="#dce8f5"/>
              <rect x="248" y="100" width="25" height="80" rx="3" fill="#c8d8ec"/>
              <rect x="278" y="60" width="35" height="120" rx="3" fill="#dce8f5"/>
              <line x1="295" y1="55" x2="295" y2="40" stroke="#90a4ae" strokeWidth="2"/>
              <path d="M288 48 Q295 42 302 48" stroke="#4caf50" strokeWidth="1.5" fill="none"/>
              <path d="M284 52 Q295 44 306 52" stroke="#4caf50" strokeWidth="1.5" fill="none"/>
              <rect x="195" y="175" width="60" height="30" rx="6" fill="#ffc107"/>
              <rect x="202" y="168" width="46" height="18" rx="4" fill="#ffe082"/>
              <rect x="206" y="170" width="10" height="10" rx="2" fill="#b3e5fc"/>
              <rect x="234" y="170" width="10" height="10" rx="2" fill="#b3e5fc"/>
              <circle cx="207" cy="207" r="7" fill="#333"/>
              <circle cx="207" cy="207" r="3" fill="#888"/>
              <circle cx="243" cy="207" r="7" fill="#333"/>
              <circle cx="243" cy="207" r="3" fill="#888"/>
              <text x="218" y="187" fill="#333" fontSize="8" fontWeight="bold">TAXI</text>
              <rect x="185" y="212" width="130" height="8" rx="2" fill="#cfd8dc"/>
              <line x1="220" y1="216" x2="240" y2="216" stroke="white" strokeWidth="2" strokeDasharray="6,4"/>
              <line x1="185" y1="225" x2="315" y2="225" stroke="#b0bec5" strokeWidth="1.5"/>
              <polygon points="315,221 322,225 315,229" fill="#b0bec5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Car Rental India ── */}
      <section className="car-rental-india">
        <div className="green-header">
          <h2>CAR RENTAL IN INDIA – BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS</h2>
        </div>
        <div className="grey-body">
          <p className="body-intro">Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:</p>
          {[
            { title: '1. Skilled Chauffeurs:', text: "Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads for a seamless travel experience." },
            { title: '2. Dedicated Oneway Cab Service:', text: 'We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.' },
            { title: '3. Well-Maintained Car Rental Fleet:', text: 'Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental.' },
            { title: '4. Transparent Pricing for Car Hire:', text: 'Our GPS-based billing system ensures fair pricing by eliminating any chances of Kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind.' },
            { title: '5. 24/7 Customer Support for Car Rentals:', text: 'Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience.' },
          ].map((p, i) => (
            <p key={i} className="body-point">
              <strong>{p.title}</strong> {p.text}
            </p>
          ))}
        </div>
      </section>

      {/* ── Why Choose One Way Cab ── */}
      <section className="why-oneway">
        <h2>WHY CHOOSE ONE WAY CAB?</h2>
        <div className="why-oneway-inner">
          <div className="why-oneway-box">
            {leftPoints.map((item, i) => (
              <div key={i} className="why-oneway-item">
                <span className="why-dot">•</span> {item}
              </div>
            ))}
          </div>
          <div className="why-oneway-car">
            <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
              <ellipse cx="120" cy="155" rx="110" ry="20" fill="#e8f5e9"/>
              <path d="M10 155 Q60 120 120 130 Q180 140 230 115" stroke="#4caf50" strokeWidth="3" fill="none"/>
              <path d="M120 130 Q140 80 200 70 Q220 68 225 80 L230 115 Q180 140 120 130Z" fill="#81c784" opacity="0.3"/>
              <rect x="190" y="85" width="6" height="30" fill="#795548"/>
              <ellipse cx="193" cy="75" rx="20" ry="25" fill="#2d6a2d"/>
              <ellipse cx="205" cy="68" rx="12" ry="18" fill="#388e3c"/>
              <rect x="65" y="118" width="70" height="28" rx="6" fill="#e53935"/>
              <rect x="72" y="106" width="56" height="20" rx="5" fill="#ef5350"/>
              <rect x="76" y="109" width="16" height="12" rx="2" fill="#b3e5fc" opacity="0.9"/>
              <rect x="105" y="109" width="16" height="12" rx="2" fill="#b3e5fc" opacity="0.9"/>
              <circle cx="80" cy="148" r="10" fill="#212121"/>
              <circle cx="80" cy="148" r="5" fill="#757575"/>
              <circle cx="120" cy="148" r="10" fill="#212121"/>
              <circle cx="120" cy="148" r="5" fill="#757575"/>
            </svg>
          </div>
          <div className="why-oneway-box">
            {rightPoints.map((item, i) => (
              <div key={i} className="why-oneway-item">
                <span className="why-dot">•</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Discover Banner ── */}
      <section className="discover-banner">
        <p>DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <strong>INTERCITY CAR RENTAL</strong> IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!</p>
      </section>

      {/* ── Explore Landscapes ── */}
      <section className="explore-section">
        <div className="green-header">
          <h2>EXPLORING INDIA'S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME</h2>
        </div>
        <div className="grey-body">
          {[
            "Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The Diverse Landscapes Of India Together. We're Passionate About Making Car Hire Accessible And Enjoyable For Everyone.",
            "Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across India, We're Here To Take You Wherever Your Heart Desires.",
            "We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional Cuisines Along The Way. These Moments Of Discovery Enrich Your Travels And Create Lasting Memories.",
            "No Destination Is Too Far Or Too Close; We Encourage You To Explore The Beauty Around You With Our Car Hire Options. Pack Your Bags, Set Out On Weekend Adventures.",
            <>Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts At <strong>7860663399</strong> For Personalized Guidance On Car Rental. Our Cab Booking App Simplifies The Process.</>,
            "Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India's Best Experiences With Our Car Rental And Taxi Service. From Booking To Your Safe Return Home.",
          ].map((text, i) => (
            <div key={i} className="body-point-row">
              <span className="body-bullet">•</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── For Any Budget / Distance / Duration ── */}
      <section className="for-any">
        {[
          {
            label: 'For Any Budget',
            text: 'Choose From Hatchbacks, Sedans, Mini SUVs, Prime SUVs, And Mini Buses Like Tempo Travellers 12-Seater To 25-Seater To Find A Ride Within Your Budget And At Your Convenience With Our Car Rental And Cab Service Options.',
            svg: <svg viewBox="0 0 80 80" fill="none"><rect x="15" y="42" width="50" height="24" rx="6" fill="#4caf50"/><rect x="22" y="32" width="36" height="16" rx="4" fill="#81c784"/><rect x="26" y="35" width="10" height="9" rx="2" fill="#b3e5fc"/><rect x="44" y="35" width="10" height="9" rx="2" fill="#b3e5fc"/><circle cx="26" cy="67" r="7" fill="#1a237e"/><circle cx="26" cy="67" r="3" fill="#5c6bc0"/><circle cx="54" cy="67" r="7" fill="#1a237e"/><circle cx="54" cy="67" r="3" fill="#5c6bc0"/><circle cx="58" cy="22" r="14" fill="#ffc107"/><text x="53" y="27" fill="#fff" fontSize="12" fontWeight="bold">$</text><path d="M52 10 Q58 6 64 10" stroke="#ff8f00" strokeWidth="2" fill="none"/><rect x="20" y="18" width="5" height="10" fill="#4caf50"/><rect x="27" y="14" width="5" height="14" fill="#4caf50"/><rect x="34" y="10" width="5" height="18" fill="#4caf50"/></svg>
          },
          {
            label: 'For Any Distance',
            text: 'Book Daily Rides With Multiple Stops Within The City Or Travel To Your Favourite Destinations Across The Country With Our Oneway Or Round Trip Outstation Cab Service. Enjoy Seamless Cab Booking For All Your Travel Needs.',
            svg: <svg viewBox="0 0 80 80" fill="none"><rect x="15" y="42" width="50" height="24" rx="6" fill="#4caf50"/><rect x="22" y="32" width="36" height="16" rx="4" fill="#81c784"/><rect x="26" y="35" width="10" height="9" rx="2" fill="#b3e5fc"/><rect x="44" y="35" width="10" height="9" rx="2" fill="#b3e5fc"/><circle cx="26" cy="67" r="7" fill="#1a237e"/><circle cx="26" cy="67" r="3" fill="#5c6bc0"/><circle cx="54" cy="67" r="7" fill="#1a237e"/><circle cx="54" cy="67" r="3" fill="#5c6bc0"/><circle cx="40" cy="18" r="12" fill="#ff9800"/><circle cx="40" cy="16" r="5" fill="white"/><path d="M40 30 L40 38" stroke="#ff9800" strokeWidth="3" strokeLinecap="round"/></svg>
          },
          {
            label: 'For Any Duration',
            text: 'Plan A Day Out With Our Hourly-Based Packages For Local City Tours Or Book Our Car Rental Services With A Driver For Long Or Multiple-Day Trips. Our Taxi Service Ensures Reliable Transportation Tailored To Your Car Hire Needs.',
            svg: <svg viewBox="0 0 80 80" fill="none"><rect x="15" y="42" width="50" height="24" rx="6" fill="#4caf50"/><rect x="22" y="32" width="36" height="16" rx="4" fill="#81c784"/><rect x="26" y="35" width="10" height="9" rx="2" fill="#b3e5fc"/><rect x="44" y="35" width="10" height="9" rx="2" fill="#b3e5fc"/><circle cx="26" cy="67" r="7" fill="#1a237e"/><circle cx="26" cy="67" r="3" fill="#5c6bc0"/><circle cx="54" cy="67" r="7" fill="#1a237e"/><circle cx="54" cy="67" r="3" fill="#5c6bc0"/><rect x="30" y="6" width="20" height="20" rx="3" fill="#ff7043"/><rect x="30" y="6" width="20" height="7" rx="3" fill="#bf360c"/><line x1="36" y1="4" x2="36" y2="9" stroke="white" strokeWidth="2"/><line x1="44" y1="4" x2="44" y2="9" stroke="white" strokeWidth="2"/><rect x="33" y="16" width="4" height="4" rx="1" fill="white"/><rect x="39" y="16" width="4" height="4" rx="1" fill="white"/></svg>
          },
        ].map((card, i) => (
          <div key={i} className="for-any-card">
            <div className="for-any-icon">{card.svg}</div>
            <h3>{card.label}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </section>

      {/* ── Why Yatri Car Rental ── */}
      <section className="yatri-info">
        <div className="green-header">
          <h2>WHY CHOOSE YATRI CAR RENTAL?</h2>
        </div>
        <div className="grey-body">
          {[
            { title: null, text: 'Yatri Car Rental Has Been A Trusted Digital Platform For Booking Local And Outstation Car Rental And Taxi Services Since 2014. Our Primary Goal Is To Offer Our Clients An Exceptional Car Rental And Cab Booking Experience, And We Take Great Pride In Our Commitment To Safety, Reliability, And Experienced Drivers.' },
            { title: 'Service You Can Trust', text: '– At Yatri Car Rental, We Are Dedicated To Providing Dependable Services In INDIA. We Guarantee That We Won\'t Cancel Any Bookings Without Advance Notification, And Our Rental Cars Are Meticulously Maintained.' },
            { title: 'Safety Is Our Priority', text: '– Safety And Comfort Are Paramount At Yatri Car Rental In INDIA. We Exclusively Hire Experienced And Skilled Drivers Who Possess In-Depth Knowledge Of The City\'s Roads And Traffic Regulations.' },
            { title: 'Expert Chauffeurs At Your Service', text: '– Yatri Car Rental Takes Pride In Selecting Only The Most Skilled, Knowledgeable, And Courteous Drivers To Enhance The Convenience And Satisfaction Of Our Clients.' },
            { title: 'Extensive Industry Experience', text: '– With Over 10 Years Of Industry Expertise, Yatri Car Rental Is Your Go-To Choice For Premium Car Hire Services.' },
            { title: 'Proven Track Record', text: '– We Place A Strong Emphasis On Transparency In Our Billing System And Consistently Strive To Provide A Seamless And Satisfactory Experience. We Consistently Receive Ratings Of 4.8 Stars Or Higher.' },
          ].map((item, i) => (
            <div key={i} className="body-point-row">
              <span className="body-bullet">•</span>
              <p>{item.title && <strong>{item.title} </strong>}{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text">{t.text}</p>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-location">{t.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── App + Driver CTA ── */}
      <section className="app-driver">
        <div className="app-cta">
          <div className="app-phones">
            <div className="phone-mock"><div className="phone-screen" /></div>
            <div className="phone-mock"><div className="phone-screen" /></div>
          </div>
          <div className="app-cta-text">
            <h3>GET YOUR<br /><span className="green-text">YATRI CABS</span><br />APP NOW!</h3>
            <p>USE CODE <strong>WELCOMEYATRI</strong> AND GET FLAT 05% OFF* ON YOUR FIRST INTERCITY RIDE</p>
            <p className="download-label">Download Now!</p>
            <div className="app-badges">
              <a href="#" className="store-badge">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M0.414 0.276C0.155 0.549 0 0.96 0 1.495V20.505C0 21.04 0.155 21.451 0.414 21.724L0.483 21.791L11.138 11.136V10.864L0.483 0.209L0.414 0.276Z" fill="#4285F4"/><path d="M14.611 14.614L11.138 11.136V10.864L14.612 7.386L14.699 7.435L18.795 9.773C19.972 10.44 19.972 11.56 18.795 12.228L14.699 14.565L14.611 14.614Z" fill="#FBBC04"/><path d="M14.699 14.565L11.138 11L0.414 21.724C0.805 22.138 1.446 22.188 2.165 21.776L14.699 14.565Z" fill="#34A853"/><path d="M2.165 0.224C1.446 -0.188 0.805 -0.138 0.414 0.276L11.138 11L14.699 7.435L2.165 0.224Z" fill="#EA4335"/></svg>
                <div className="badge-text"><span className="badge-sub">GET IT ON</span><span className="badge-main">Google Play</span></div>
              </a>
              <a href="#" className="store-badge">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="white"><path d="M16.462 12.748c-.028-3.04 2.49-4.51 2.603-4.578-1.42-2.074-3.626-2.357-4.408-2.385-1.87-.19-3.656 1.107-4.604 1.107-.952 0-2.415-1.083-3.97-1.054-2.034.03-3.915 1.183-4.963 2.993-2.118 3.668-.542 9.096 1.52 12.074 1.01 1.454 2.208 3.084 3.785 3.026 1.52-.063 2.095-.978 3.934-.978 1.838 0 2.365.978 3.972.945 1.638-.027 2.672-1.479 3.672-2.938 1.162-1.682 1.637-3.312 1.661-3.398-.037-.015-3.182-1.218-3.202-4.814zM13.296 3.67C14.12 2.668 14.68 1.28 14.52 0c-1.17.048-2.612.78-3.462 1.763-.754.863-1.423 2.27-1.24 3.606 1.31.1 2.652-.664 3.478-1.699z"/></svg>
                <div className="badge-text"><span className="badge-sub">Download on the</span><span className="badge-main">App Store</span></div>
              </a>
            </div>
          </div>
        </div>
        <div className="driver-cta">
          <h3>BECOME A <span className="green-text">DRIVER</span> PARTNER</h3>
          <p>Join <strong>Yatri Car Rental</strong> And Attach Your Car To Our Platform. Earn More By Serving Our Passengers And Benefit From Our Extensive Customer Base.</p>
          <button className="driver-btn">DOWNLOAD THE APP</button>
        </div>
      </section>

      {/* ── Footer Cities Bar ── */}
      <div className="footer-cities-bar">
        <span className="footer-label">Operational Cities :</span>
        {cities.map((city, i) => (
          <a key={i} href="#" className="footer-city-link">{city}</a>
        ))}
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-logo-wrap">
          <img src="/logso.png" alt="Yatri Cabs" className="footer-logo-img" />
        </div>
        <nav className="footer-nav">
          {['Home', 'About', 'Services', 'Contact', 'Career', 'Privacy Policy', 'Terms & Condition'].map((link, i) => (
            <a key={i} href="#" className="footer-nav-link">{link}</a>
          ))}
        </nav>
        <p className="footer-copy">All Copyrights are reserved by YATRI CABS</p>
      </footer>
    </>
  );
}