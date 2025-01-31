import React from 'react'
import './Fotter.css'
import insta from '../../Icons/instagram.svg'
import facebook from '../../Icons/facebook.svg'
import apple from '../../Icons/apple.svg'
import apps from '../../Icons/apps.svg'
import appStore from '../../Icons/appStore.svg'
import twia from '../../Icons/twia.svg'
import tiktok from '../../Icons/tiktok.svg'
import pay4me from '../../Icons/pay.svg'
import mail from '../../Icons/mail.svg'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={pay4me} alt="Pay4Me Logo" />
          <div className="support">
            <img src={mail} />
            <p className="support-email">support@pay4me.app</p>
          </div>
          <div className="social-icons">
            <img src={insta} alt="Instagram" className="social-icon" />
            <img src={twia} alt="X" className="social-icon" />
            <img src={facebook} alt="Facebook" className="social-icon" />
            <img src={tiktok} alt="TikTok" className="social-icon" />
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">How it Works</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Android Reviews</a>
              </li>
              <li>
                <a href="#">iOS Reviews</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">KYC/AML Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-apps">
          <button className="store-button">
            <img src="/appstore.svg" alt="App Store" className="icon" />
            Download on Appstore
          </button>
          <button className="store-button">
            <img src="/playstore.svg" alt="Play Store" className="icon" />
            Download on Playstore
          </button>
          <p className="app-description">
            Depending on your mobile device, download our awesome native app to
            start enjoying all the benefits of Pay4Me.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2020 - 2024 Pay4Me, Inc.</p>
        <p className="company-description">
          Pay4Me is a financial technology company making it easier for
          international students and immigrants to pay their tuition and fees in
          minutes.
        </p>
      </div>
    </footer>
  )
}

export default Footer
