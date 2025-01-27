import lightning from '../../assets/Lightning.svg'
import btnIcon from '../../assets/btnIcons.svg'
import playIcon from '../../assets/playIcon.svg'
import userCircle from '../../assets/usersCircle.jpg'
import woman from '../../assets/hero-woman.jpg'
import herFotter from '../../assets/heroFotter.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
      {/* HERO BUTTON */}
      <div className="hero-button">
        <button type="button" className="lightIcon">
          <img src={lightning} /> SECURE GLOBAL FAST
        </button>
      </div>
      {/* HERO TEXT */}
      <div className="hero-text">
        <h1>Reliable Payment Solutions for International Education</h1>
        <div className="small-text">
          <p>
            The easiest and fastest way to pay tuition and fees to educational
            institutions, businesses, and government agencies worldwide.
          </p>
        </div>
        {/* BUTTON */}
        <div className="twoBtn">
          <button
            type="button"
            className="btnIcon"
            style={{ backgroundColor: '#afe274', borderRadius: '33px' }}
          >
            Download app <img src={btnIcon} />
          </button>
          <button
            type="button"
            className="btnIcon"
            style={{ backgroundColor: '#f4f8ef', borderRadius: '33px' }}
          >
            Watch Demo <img src={playIcon} />
          </button>
        </div>

        {/* USER CIRCLE */}
        <div className="user-circle">
          <img src={userCircle} />
          <p>Trusted by 3k+ Students Globally</p>
        </div>
        {/* WOMAN IMAGE */}
        <div className="woman-img">
          <img src={woman} />
        </div>
        {/* FOTTER */}
        <div className="sponsors">
          <img src={herFotter} />
        </div>
      </div>
    </section>
  )
}
export default Hero
