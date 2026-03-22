import '../../globals.css';

const ASSETS = {
  appStore: 'https://www.figma.com/api/mcp/asset/17e8991a-b5d5-463e-8a2f-f5a3d31c64ad',
  playStore: 'https://www.figma.com/api/mcp/asset/6c26994c-40d8-4131-acef-51d474a5b5d4',
};



export default function Trust() {
  return (
    <div className="trust-bar">
          <div className="trust-inner">
            <div className="trust-item">
              <h3>Transparent Billing</h3>
              <p>GPS Based Billing | No Km Tampering</p>
            </div>
            <div className="trust-divider" />
            <div className="download-block">
              <h4>Download Now!</h4>
              <div className="app-badges">
                <img src={ASSETS.appStore} alt="App Store" />
                <img src={ASSETS.playStore} alt="Play Store" />
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <h3>No return fare</h3>
              <p>Oneway cab fare I No hidden charges</p>
            </div>
          </div>
    </div>
  );
}