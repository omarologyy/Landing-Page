import './qrcFold.css'
import qrc from '../../Images/qrc.jpg'
import apps from '../../Icons/apps.svg'
import appStore from '../../Icons/appStore.svg'

const qrF = () => {
  return (
    <div className="banner-container">
      <div className="text-container">
        <h2 className="heading">
          Download the <span className="highlight">Pay4Me</span> App Today!
        </h2>
        <p className="description">
          Our custom QR code will take you to your app store to download our
          awesome native apps.
        </p>
        <div className="button-container">
          <button className="store-button">
            <img src={apps} alt="App Store" className="icon" />
            Appstore
          </button>
          <button className="store-button">
            <img src={appStore} alt="Play Store" className="icon" />
            Playstore
          </button>
        </div>
      </div>
      <div className="qr-container">
        <div className="qr-box">
          <img src={qrc} alt="QR Code" className="qr-image" />
        </div>
      </div>
    </div>
  )
}

export default qrF
