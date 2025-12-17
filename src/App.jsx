import Header from "./components/section/Header"
import Home from "./components/section/Home"
import About from "./components/section/About"
import Skills from "./components/section/Skills"
import Portfolio from "./components/section/Portfolio"
import Testimonials from "./components/section/Testimonials"
import Contact from "./components/section/Contact"
import Sidebar from "./components/Sidebar"

function App() {
    
  return (

      <div className=" bg-light-main dark:bg-dark-main bg-[linear-gradient(to_right,var(--color-grid-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-light)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,var(--color-grid-dark)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-dark)_1px,transparent_1px)] bg-size-[25px_25px] ">
        <Sidebar/>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </div>
  )
}

export default App
