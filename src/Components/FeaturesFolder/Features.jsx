import barcode from '../../Icons/barcodeIcon.svg'
import fIcon1 from '../../Icons/featureIcon1.svg'
import fIcon2 from '../../Icons/featureIcon2.svg'
import fIcon3 from '../../Icons/featureIcon3.svg'
import lIcon from '../../Icons/Lightning.svg'

import './Features.css'

const features = [
  {
    icon: { fIcon1 },
    title: 'Global Accessibility',
    description:
      'Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are.',
  },
  {
    icon: { fIcon2 },
    title: 'Fast & Reliable Transactions',
    description:
      'Ensure your payments are processed quickly, helping you meet important deadlines without stress.',
  },
  {
    icon: { fIcon3 },
    title: 'Secure & Transparent',
    description:
      'Enjoy peace of mind with secure payment processing and complete transparency on fees and conversion rates.',
  },
]

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <button type="button" className="light">
            <img src={lIcon} /> FEATURES
          </button>
          <h2 className="features-title">What truly Sets Us Apart</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <button type="button" className="btnIcon">
                Download app <img src={barcode} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
