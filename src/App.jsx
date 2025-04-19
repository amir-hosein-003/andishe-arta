import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Products from "./components/Products"
import Projects from "./components/Projects"



const App = () => {
  return (
    <div className="bg-base-300">
      <Navbar />
      <HeroSection />
      <Products />
      <Projects />
    </div>
  )
}

export default App
