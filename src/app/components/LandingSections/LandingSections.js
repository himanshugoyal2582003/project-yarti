import "../../globals.css";

// Asset URLs from Figma
const imgBudget = "https://www.figma.com/api/mcp/asset/cda3ff60-7603-4a2a-b25b-c0ed5bcbaf28";
const imgMapPin = "https://www.figma.com/api/mcp/asset/087aa597-8cce-4f19-b8f2-bc12e143e4a0";
const imgDuration = "https://www.figma.com/api/mcp/asset/aeafcd56-478b-47c4-84a8-a55fa01fc3f8";
const imgCabIcon = "https://www.figma.com/api/mcp/asset/9eef3c07-a434-4e1c-868a-1547255ca203";
const imgBolt = "https://www.figma.com/api/mcp/asset/3bf4956d-afe2-4e27-9697-802919049f51";
const imgPeople = "https://www.figma.com/api/mcp/asset/3099a0f8-429a-4f2e-9ab9-db121125d3ac";
const imgEasyOrder = "https://www.figma.com/api/mcp/asset/b25c508a-a323-4232-890e-1a4214178f84";
const imgPaid = "https://www.figma.com/api/mcp/asset/e523e5cf-bbeb-4ae0-9143-16619c691f83";
const imgCarRental = "https://www.figma.com/api/mcp/asset/a6cef46e-fb7c-4781-b3b6-13c3b004c0ec";
const imgWhyBus = "https://www.figma.com/api/mcp/asset/bd3b4216-7710-42a8-bd27-d3cea13427bd";
const imgOnewaycar = "https://www.figma.com/api/mcp/asset/4e199cc5-e3fd-4db0-aa04-fc42aac65ffd";
const imgImage6 = "https://www.figma.com/api/mcp/asset/5eade0be-c5f6-4b2d-88fc-4b1360bbe950";
const imgImage7 = "https://www.figma.com/api/mcp/asset/021cbc76-2307-4eb7-8a8c-8b338f4ea291";
const imgLogo = "https://www.figma.com/api/mcp/asset/26dc83d7-e79d-4254-8244-c379f3d476ae";
const imgGpsIcon = "https://www.figma.com/api/mcp/asset/09352d13-e37c-4239-a2bf-dfb0c042d605";
const imgRouteIcon = "https://www.figma.com/api/mcp/asset/5698acfc-a864-4140-a5e5-0aba7f019d1d";
const imgBlue = "https://www.figma.com/api/mcp/asset/8bef8c0a-4373-43d5-8adf-ac7d13441ec2";
const imgLine297 = "https://www.figma.com/api/mcp/asset/d238b2b5-9f0c-4951-8d1b-8a5e10942c3b";
const imgRect = "https://www.figma.com/api/mcp/asset/1d774ee1-c3f5-488a-8105-c81d1c88eff7";

const carTypes = [
  { type: 'AC Sedans', model: 'Etios, Amaze, Dzire etc.', passengers: '4 Pax', ideal: 'Comfortable trips with small families', fare: 'Rs.11/KM' },
  { type: 'AC Hatchbacks', model: 'Wagon R, Celerio, Micra etc.', passengers: '4 Pax', ideal: 'Budget trips over short distances', fare: 'Rs.11/KM' },
  { type: 'AC SUV', model: 'Ertiga, Xylo etc.', passengers: '6-7 Pax', ideal: 'Premium trips with large families', fare: 'Rs.13/KM' },
];

const testimonials = [
  { name: 'Vikram Kulkarni', location: 'Kalyan, Maharashtra', text: "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!" },
  { name: 'Rajesh Kumawat', location: 'Kanpur, Uttar Pradesh', text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!" },
  { name: 'Anjali Mishra', location: 'Gorakhpur, Uttar Pradesh', text: "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable." },
  { name: 'Siddharth Vaidya', location: 'Rohini, Delhi', text: "As a frequent business traveler, finding a reliable one-way cab service that doesn't charge for a return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler." },
];

const cities = [
  { name: 'Lucknow', href: 'https://www.yatricabs.com/lucknow/car-rental' },
  { name: 'Ayodhya', href: 'https://www.yatricabs.com/ayodhya/car-rental' },
  { name: 'Gorakhpur', href: 'https://www.yatricabs.com/gorakhpur/car-rental' },
  { name: 'Varanasi', href: 'https://www.yatricabs.com/varanasi/taxi-service' },
  { name: 'Allahabad (Prayagraj)', href: 'https://www.yatricabs.com/allahabad/car-rental' },
  { name: 'Kanpur', href: 'https://www.yatricabs.com/kanpur/car-rental' },
];

export default function LandingSections() {
  return (
    <>
      {/* 1. FEATURES STRIP */}
      <section className="features-strip">
        <div className="feature-card">
          <img src={imgGpsIcon} alt="Return Fare" className="feature-icon" />
          <h3>Return Fare, Not Fair!</h3>
          <p>Why Pay for Return Journey when you are travelling oneway? Now get discounted AC Taxi at just half of the round trip cost for your one way travel.</p>
        </div>
        <div className="feature-divider" />
        <div className="feature-card">
          <img src={imgGpsIcon} alt="GPS Billing" className="feature-icon" />
          <h3>GPS Based Billing System</h3>
          <p>Since the GPS data captures the actual distance and time travelled, it reduce the chance of Kilometer tampering or discrepancies in billing.</p>
        </div>
        <div className="feature-divider" />
        <div className="feature-card">
          <img src={imgRouteIcon} alt="Routes" className="feature-icon" />
          <h3>Now available routes are!</h3>
          <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
        </div>
      </section>

      {/* 2. PREMIER */}
      <section className="premier">
        <h2>India's Premier Intercity and Local Taxi Services</h2>
        <p>At Yatri Cabs, we pride ourselves on being a top-tier online oneway cab booking service, delivering reliable and premium intercity and local taxi services. With over a decade of experience, Instead of self-drive car rental, we have become the leading driver-driven One Way car rental company in India, renowned for our extensive coverage across the country</p>
      </section>

      {/* 3. WHY YATRI */}
      <section className="why-yatri">
        <div className="why-left">
          <img src={imgCarRental} alt="Yatri Cab" className="cab-img" />
        </div>
        <div className="why-right">
          <h2>Why <span>Yatri</span> ?</h2>
          <div className="why-item">
            <img src={imgBolt} alt="Fast" className="why-icon" />
            <div className="why-text">
              <h4>Fast response time</h4>
              <p>Experience the Best Car Rental Service with Driver for Local or Outstation Trips. Enjoy prompt response times and seamless car hire service, ensuring you get on the road quickly</p>
            </div>
          </div>
          <div className="why-item">
            <img src={imgPeople} alt="Fleet" className="why-icon" />
            <div className="why-text">
              <h4>Vast fleet</h4>
              <p>We offer a wide range of rental cars including Sedans, SUVs, MUVs, premium Sedans, and Tempo Travellers to meet all your Car Hire needs.</p>
            </div>
          </div>
          <div className="why-item">
            <img src={imgEasyOrder} alt="Easy" className="why-icon" />
            <div className="why-text">
              <h4>Easy to order</h4>
              <p>Easily Book a Cab Online through our user-friendly website, mobile application, or by calling our customer support team.</p>
            </div>
          </div>
          <div className="why-item">
            <img src={imgPaid} alt="Tariffs" className="why-icon" />
            <div className="why-text">
              <h4>Great tariffs</h4>
              <p>Rent a Car at the Lowest Rates! Our car hire tariffs are highly competitive compared to other operators. Book online cabs at the best prices with Yatri Car Rental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAR TYPES TABLE */}
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
                  <td style={{textAlign:'center'}}>{car.passengers}</td>
                  <td>{car.ideal}</td>
                  <td>{car.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. WHY BUS / TRAIN */}
      <section className="why-bus">
        <div className="why-bus-inner">
          <div className="why-bus-text">
            <h2>
              Why choose AC Bus or AC Train for your{' '}
              <span>One-way Journey</span>?
            </h2>
            <p>Our oneway Car Rental service is cheaper than AC bus and 2-tier AC train ticket fares. It reduces your travel time, and you travel in your own private space, allowing you to fully enjoy your journey. Our one way taxi will come to your doorstep and take you to your desired destination. So, book your Cheapest one way cab from Lucknow to Gorakhpur or Varanasi to Ayodhya with our reliable Oneway car rental service with driver. Experience the convenience of our taxi service, where you can rent a car effortlessly and enjoy seamless cab booking. Choose our car hire option for a hassle-free and comfortable travel experience. We offer outstation cab and intercity travel services, ensuring a smooth and enjoyable Luxury ride wherever you need to go.</p>
          </div>
          <img src={imgWhyBus} alt="Why Bus" className="why-bus-img" />
        </div>
      </section>

      {/* 6. CAR RENTAL INDIA */}
      <section className="car-rental-india">
        <div className="green-header">
          <h2>Car Rental in India - Book Reliable Vehicles for All Your Needs</h2>
        </div>
        <div className="grey-body">
          <p>Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:<br /><br /></p>
          <p><strong>1. Skilled Chauffeurs: </strong>Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads for a seamless travel experience.<br /><br /></p>
          <p><strong>2. Dedicated Oneway Cab Service: </strong>We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.<br /><br /></p>
          <p><strong>3. Well-Maintained Car Rental Fleet: </strong>Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental.<br /><br /></p>
          <p><strong>4. Transparent Pricing for Car Hire: </strong>Our GPS-based billing system ensures fair pricing by eliminating any chances of Kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services.<br /><br /></p>
          <p><strong>5. 24/7 Customer Support for Car Rentals: </strong>Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India.</p>
        </div>
      </section>

      {/* 7. WHY ONE WAY CAB */}
      <section className="why-oneway">
        <h2>Why Choose One way Cab?</h2>
        <div className="why-oneway-inner">
          <div className="why-oneway-box">
            {['Instant Booking & Confirmation', 'Confirmed Booking Immediately', 'No Return Fare for One-Way Trip', 'Clean & Professional Cab Services', 'Transparent Billing with GPS based billing system'].map((item, i) => (
              <div key={i} className="why-oneway-item">{item}</div>
            ))}
          </div>
          <img src={imgOnewaycar} alt="One Way Cab" className="why-oneway-car" />
          <div className="why-oneway-box">
            {['Pick-up from your house', 'Dedicated Cab just for you', 'Drop to your desired destination', 'Completed more than 20,000+ Oneway Trips', 'Multiple Payment Option including Credit Card.'].map((item, i) => (
              <div key={i} className="why-oneway-item">{item}</div>
            ))}
          </div>
        </div>
        <p className="discover-text">
          Discover affordable travel with our seamless <strong>intercity car rental</strong> in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!
        </p>
      </section>

      {/* 8. EXPLORE LANDSCAPES */}
      <section className="explore-section">
        <div className="green-header">
          <h2>{`Exploring India's amazing landscapes, from the mountains to the beaches,\none memorable road trip at a time`}</h2>
        </div>
        <div className="grey-body">
          <ul>
            {[
              "Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We're passionate about making car hire accessible and enjoyable for everyone.",
              "Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our Luxury car rental services.",
              "We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service.",
              "No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.",
              <>Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at <strong>7860663399</strong> for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.</>,
              "Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip.",
            ].map((text, i) => (
              <li key={i}><span>{text}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. FOR ANY BUDGET / DISTANCE / DURATION */}
      <section className="for-any">
        {[
          { label: 'For Any Budget', img: imgBudget, cab: imgCabIcon, text: 'Choose from hatchbacks, sedans, mini SUVs, prime SUVs, and mini buses like Tempo Travellers 12-seater to 25-seater to find a ride within your budget and at your convenience with our Car Rental and Cab Service options.' },
          { label: 'For Any Distance', img: imgMapPin, cab: imgCabIcon, text: 'Book daily rides with multiple stops within the city or travel to your favourite destinations across the country with our Oneway or Round Trip Outstation Cab service. Enjoy seamless Cab Booking for all your travel needs.' },
          { label: 'For Any Duration', img: imgDuration, cab: imgCabIcon, text: 'Plan a day out with our hourly-based packages for local city tours or book our Car Rental services with a driver for long or multiple-day trips. Our Taxi Service ensures reliable transportation tailored to your Car Hire needs.' },
        ].map((card, i) => (
          <div key={i} className="for-any-card">
            <div className="for-any-icon-wrap">
              <img src={card.cab} alt={card.label} className="for-any-cab-img" />
              <img src={card.img} alt={card.label} className="for-any-top-img" />
            </div>
            <h3>{card.label}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </section>

      {/* 10. WHY YATRI CAR RENTAL */}
      <section className="yatri-info">
        <div className="green-header">
          <h2>Why Choose Yatri Car Rental?</h2>
        </div>
        <div className="grey-body">
          <ul>
            <li><span>Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience, and we take great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in INDIA.</span></li>
            <li><span><strong>Service You Can Trust</strong> - At Yatri Car Rental, we are dedicated to providing dependable services in INDIA. We guarantee that we won't cancel any bookings without advance notification, and our rental cars are meticulously maintained to ensure a seamless and stress-free journey for our clients.</span></li>
            <li><span><strong>Safety is Our Priority</strong> - Safety and comfort are paramount at Yatri Car Rental in INDIA. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for passengers.</span></li>
            <li><span><strong>Expert Chauffeurs at Your Service</strong> - Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients.</span></li>
            <li><span><strong>Extensive Industry Experience</strong> - With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services.</span></li>
            <li><span><strong>Proven Track Record</strong> - We place a strong emphasis on transparency in our billing system and consistently strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher.</span></li>
          </ul>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-stars">
                  {[1,2,3,4,5].map(s => <span key={s} className="testimonial-star">★</span>)}
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <h4>{t.name}</h4>
                <p>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. APP + DRIVER CTA */}
      <section className="app-driver">
        <div className="app-cta">
          <div className="app-phones">
            <div className="phone-mock" style={{marginRight: '-20px', zIndex: 1}}>
              <img src={imgLogo} alt="App" className="phone-logo" />
            </div>
            <div className="phone-mock" style={{position:'relative'}}>
              <img src={imgBlue} alt="App" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
              <img src={imgLogo} alt="App" className="phone-logo" style={{zIndex:2}} />
            </div>
          </div>
          <div className="app-cta-text">
            <h3>{`GET  YOUR \n`}<span>YATRI CABS</span>{`\nAPP  NOW!`}</h3>
            <p className="promo">Use code <strong>WELCOMEYATRI</strong> and get <strong>FLAT 05%</strong> OFF* on your first intercity RIDE</p>
            <p className="download-label">Download Now!</p>
            <div className="app-store-badges">
              <img src={imgImage6} alt="Google Play" />
              <img src={imgImage7} alt="App Store" />
            </div>
          </div>
        </div>

        <div className="vertical-divider" />

        <div className="driver-cta">
          <h3>Become a <span>Driver</span> Partner</h3>
          <p>Join <strong>Yatri Car Rental</strong> and attach your car to our platform. Earn more by serving our passengers and benefit from our extensive customer base.</p>
          <button className="driver-btn">DOWNLOAD THE APP</button>
        </div>
      </section>

      {/* 13. FOOTER CITIES BAR */}
      <div className="footer-cities-bar">
        <span>Operational Cities : </span>
        {cities.map((city, i) => (
          <a key={i} href={city.href}>{city.name}</a>
        ))}
      </div>

      {/* 14. FOOTER */}
      <footer className="footer">
        <img src={imgLogo} alt="Yatri Cabs" className="footer-logo-img" />
        <nav className="footer-nav">
          {['Home', 'About', 'Services', 'Career', 'Contact', 'Privacy Policy', 'Terms & Condition'].map((link, i) => (
            <a key={i} href="#">{link}</a>
          ))}
        </nav>
        <p className="footer-copy">All Copyrights are reserved by YATRI CABS</p>
      </footer>
    </>
  );
}