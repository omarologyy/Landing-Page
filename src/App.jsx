import Blog from './Components/BlogFolder/Blog'
import Faq from './Components/FAQFolder/Faq'
import Features from './Components/FeaturesFolder/Features'
import Footer from './Components/FotterFolder/Fotter'
import Hero from './Components/HeroFolder/Hero'
import Navbar from './Components/NavbarFolder/Navbar'
import Navv from './Components/Navv'

import Offers from './Components/OffersFolder/Offers'
import Steps from './Components/StepsFolder/Steps'
// import qrcFold from './Components/qrFolder/qrcFold'

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Hero /> */}
      <Navv />
      <Features />
      <Steps />
      <Offers />
      <Faq />
      <Blog />
      <qrcFold />
      <Footer />
    </div>
  )
}
export default App
