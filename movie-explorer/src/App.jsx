import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar.jsx"
import Home from "@/pages/Home.jsx"
import MovieDetails from "@/pages/MovieDetails.jsx"
import Favorites from "@/pages/Favorites.jsx"



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
