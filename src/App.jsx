import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Competitive,About, Contact, Experience, Hero, Navbar, Tech, Works, Feedbacks, StarsCanvas } from "./components";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
