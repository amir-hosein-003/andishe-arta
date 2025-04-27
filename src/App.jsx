import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Products from "./components/Products"
import Projects from "./components/Projects"
import Form from "./components/Form"
import Introduction from "./components/Introduction"
import Teams from "./components/Teams"



const App = () => {
  return (
    <div className="bg-base-300">
      <Navbar />
      <HeroSection />
      <Products />
      <Projects />
      <Form />
      <Introduction />
      <Teams />
    </div>
  )
}

export default App
