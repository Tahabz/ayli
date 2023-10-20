import "./App.css"
import Advantages from "./components/Advantages"
import Feedbacks from "./components/Feedbacks"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Offers from "./components/Offers"
import Tarif from "./components/Tarif"
import HowPortAyliWork from "./components/HowPortAyliWork"
import WhyPortAyli from "./components/WhyPortAyli"

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
    </>
  )
}

export default App
