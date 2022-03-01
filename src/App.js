import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <Router className="bg-purple-500">
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            {/* catch all page if we hit a page that doesn't exsist */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
