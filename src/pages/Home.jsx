import { BrowserRouter } from "react-router-dom";
import { Competitive,About, Contact, Experience, Hero, Navbar, Tech, Works, Feedbacks, StarsCanvas, Footer } from "../components";

const Home = () => {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          {/* <Experience /> */}
          <Tech />
          <Works />
          <div id="competition">
            <Competitive/>
          </div>
          
          {/* <Feedbacks /> */}

          <div className="relative z-0 " id="contact">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home
