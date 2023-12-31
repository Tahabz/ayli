import "./App.css"
import Advantages from "./components/Advantages"
import Feedbacks from "./components/Feedbacks"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Offers from "./components/Offers"
import Tarif from "./components/Tarif"
import HowPortAyliWork from "./components/HowPortAyliWork"
import WhyPortAyli from "./components/WhyPortAyli"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Offers />
      <Advantages />
      <Tarif />
      <WhyPortAyli />
      <Feedbacks />
      <HowPortAyliWork />
      <Contact />
    </>
  )
}

export default App
