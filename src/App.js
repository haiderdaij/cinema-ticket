import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import NoPageFound from "./pages/NoPageFound";
import LocalMovie from "./components/Movies/layout/localMovie";
import { Outlet } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
const Error = <NoPageFound />;

function App() {
  const [favourite, setFavourite] = useLocalStorage("favourite", []);

  return (
    <>
      <HashRouter>
        <Navbar favourite={favourite} />
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
            <Route
              path=":movie"
              element={
                <LocalMovie
                  Error={Error}
                  favourite={favourite}
                  setFavourite={setFavourite}
                />
              }
            />
          </Route>
          <Route path="*" element={Error} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
