import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Carousel from './components/Carousel'
import Extensions from './components/Extensions'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import PhoneNav from './components/PhoneNav'
import CustomModal from './components/UI/CustomModal'

function App() {
  return (
    <div className="container">
      <CustomModal />
      <Nav />
      <PhoneNav />
      <Hero />
      <Features />
      <Carousel />
      <Extensions />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
