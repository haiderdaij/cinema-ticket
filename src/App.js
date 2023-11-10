import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
