import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <Router className="bg-purple-500">
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="container mx-auto px-3 pb-12">Content</main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
