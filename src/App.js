import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import NoPageFound from "./pages/NoPageFound";
import LocalMovie from "./components/Movies/layout/localMovie";
import { Outlet } from "react-router-dom";
const Error = <NoPageFound />;

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="movies"
            element={
              <section className="max-w-full px-0">
                <Outlet />
              </section>
            }
          >
            <Route path=":movie" element={<LocalMovie Error={Error} />} />
          </Route>
          <Route path="*" element={Error} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
