import { Fakshin } from "./components/Fakshin"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Ortasi } from "./components/Oxiri"
import { Section } from "./components/Section"

function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Section/>
        <Nav/>
        <Fakshin/>
        <Ortasi/>
      </main>
    </>
  )
}

export default App
