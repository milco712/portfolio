import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Management from "./pages/Management";
import Development from "./pages/Development";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="bg-[#F9FAFB] pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/management" element={<Management />} />
            <Route path="/development" element={<Development />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
