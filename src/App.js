import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import NoPageFound from "./pages/NoPageFound";
import LocalMovie from "./components/Movies/localMovie";

const ErrorPage = <Route path="*" element={<NoPageFound />} />;

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<LocalMovie />} />
          </Route>
          {ErrorPage}
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
