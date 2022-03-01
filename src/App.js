import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
function App() {
  return (
    <Router className="bg-purple-500">
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
