import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Products from "./components/Products"
import Projects from "./components/Projects"
import Form from "./components/Form"
import Introduction from "./components/Introduction"
import Teams from "./components/Teams"
import Footer from "./components/Footer"



const App = () => {
  return (
    <div className="bg-base-300 font-yekan">
      <Navbar />
      <HeroSection />
      <Products />
      <Projects />
      <Form />
      <Introduction />
      <Teams />
      <Footer />
    </div>
  )
}

export default App
