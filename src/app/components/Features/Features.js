import '../../globals.css';

const ASSETS = {
 
  gpsIcon: 'https://www.figma.com/api/mcp/asset/e0aaaec5-a357-404c-8af9-eba7860c79bd',
  drivingIcon: 'https://www.figma.com/api/mcp/asset/53c64806-4783-4fa3-b4cb-ec3a990cf6c1',
  returnFareIcon: 'https://www.figma.com/api/mcp/asset/9723dad3-5897-4333-95b0-72bd40d15b72',
 
};



export default function Trust() {
  return (
    <div className="features-section">
        <div className="feature-item">
          <div className="feature-icon">
            <img src={ASSETS.returnFareIcon} alt="Return Fare" />
          </div>
          <div className="feature-text">
            <h3>Return Fare, Not Fair!</h3>
            <p>Why Pay for Return Journey when you are travelling oneway? Now get discounted AC Taxi at just half of the round trip cost for your one way travel.</p>
          </div>
        </div>

        <div className="feature-divider" />

        <div className="feature-item">
          <div className="feature-icon">
            <img src={ASSETS.gpsIcon} alt="GPS Billing" />
          </div>
          <div className="feature-text">
            <h3>GPS Based Billing System</h3>
            <p>Since the GPS data captures the actual distance and time travelled, it reduces the chance of Kilometer tampering or discrepancies in billing.</p>
          </div>
        </div>

        <div className="feature-divider" />

        <div className="feature-item">
          <div className="feature-icon">
            <img src={ASSETS.drivingIcon} alt="Routes" />
          </div>
          <div className="feature-text">
            <h3>Now available routes are!</h3>
            <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
          </div>
        </div>
      </div>
  );
}