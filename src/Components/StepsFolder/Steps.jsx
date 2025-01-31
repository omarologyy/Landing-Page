// import './Steps.css'
// import lth from '../../Icons/Lightning.svg'
// import mark from '../../Icons/mrk.svg'
// import mobile from '../../Icons/mv.svg'
// import payment from '../../Icons/pment.svg'
// import qrd from '../../Icons/qrd.svg'
// import btn from '../../assets/btnIcons.svg'

// const Steps = () => {
//   return (
//     <section className="steps-container">
//       <div className="steps-btn">
//         <button type="button" className="btn">
//           <img src={lth} /> HOW IT WORKS
//         </button>
//       </div>
//       <div className="steps-text">
//         <h2>4 Steps to get Started</h2>
//       </div>
//       <div className="steps-boxes">
//         <div className="step-box">
//           <h3>1.</h3>
//           <p>Download the Mobile App</p>
//           <p>
//             Get started by downloading our mobile app, available on iOS and
//             Android.
//           </p>
//           <img src={qrd} />
//         </div>
//         <div className="step-box">
//           <h3>2.</h3>
//           <p>Sign up on the app.</p>
//           <p>
//             Sign up with your details, verify your identity, and set up your
//             payment preferences.
//           </p>
//           <img src={mobile} />
//         </div>
//         <div className="step-box">
//           <h3>3.</h3>
//           <p>Setup Payment Details</p>
//           <p>
//             Securely link your local bank account or mobile wallet to the
//             PayTime app.
//           </p>
//           <img src={payment} />
//         </div>
//         <div className="step-box">
//           <h3>4.</h3>
//           <p>Complete Your Payment</p>
//           <p>
//             Choose your preferred payment method and finalize the transaction
//             securely.
//           </p>
//           <img src={mark} />
//         </div>
//         <button
//           type="button"
//           className="btnIcon"
//           style={{ backgroundColor: '#afe274', borderRadius: '33px' }}
//         >
//           Download app <img src={btn} />
//         </button>
//       </div>
//     </section>
//   )
// }
// export default Steps

import React from 'react'

import './Steps.css'
import lth from '../../Icons/Lightning.svg'
import mark from '../../Icons/mrk.svg'
import mobile from '../../Icons/mv.svg'
import payment from '../../Icons/pment.svg'
import qrd from '../../Icons/qrd.svg'
import btn from '../../assets/btnIcons.svg'

const LayoutComponent = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="how-it-works">
          <img src={lth} alt="Lightning Icon" className="icon" />
          <span className="how-it-works-text">How it works</span>
        </div>
        <h1 className="title">4 Simple Steps to Get Started</h1>
      </div>
      <div className="steps-container">
        <div className="step-card">
          <span className="step-number">1.</span>
          <h2 className="step-title">Download the Mobile App</h2>
          <p className="step-description">
            Get started by downloading our mobile app, available on iOS and
            Android.
          </p>
          <img src={qrd} alt="QR Code" className="step-image" />
        </div>
        <div className="step-card">
          <span className="step-number">2.</span>
          <h2 className="step-title">Sign up on the app.</h2>
          <p className="step-description">
            Sign up with your details, verify your identity, and set up your
            payment preferences.
          </p>
          <img src={mobile} alt="Sign Up" className="step-image" />
        </div>
        <div className="step-card">
          <span className="step-number">3.</span>
          <h2 className="step-title">Setup Payment Details</h2>
          <p className="step-description">
            Securely link your local bank account or mobile wallet to the Pay4me
            app.
          </p>
          <img src={payment} alt="Payment Setup" className="step-image" />
        </div>
        <div className="step-card">
          <span className="step-number">4.</span>
          <h2 className="step-title">Complete Your Payment</h2>
          <p className="step-description">
            Choose your preferred payment method and finalize the transaction
            securely.
          </p>
          <img src={mark} alt="Complete Payment" className="step-image" />
        </div>
      </div>
    </div>
  )
}

export default LayoutComponent
