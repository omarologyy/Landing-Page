import Blog from './Components/BlogFolder/Blog'
import Faq from './Components/FAQFolder/Faq'
import Features from './Components/FeaturesFolder/Features'
import Footer from './Components/FotterFolder/Fotter'
import Hero from './Components/HeroFolder/Hero'
import Navbar from './Components/NavbarFolder/Navbar'
import Offers from './Components/OffersFolder/Offers'
import Steps from './Components/StepsFolder/Steps'
import qrcFold from './Components/qrFolder/qrF'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Offers />
      <Faq />
      <Blog />
      <Footer />
      <qrcFold />
    </div>
  )
}
export default App
