import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./Components/Loader/Loading";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
const Gallery = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Gallery }))
);
const Home = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Home }))
);
const Events = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Events }))
);
const Team = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Team }))
);
const Sponsors = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Sponsors }))
);

const ArtistPage = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.ArtistPage }))
);
const NotFound = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.NotFound }))
);
// import Footer from "./Components/Shared/Footer/Footer";
// import Navbar from "./Components/Shared/Navbar/Navbar";
const App = () => {
  return (
    <main className="relative">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          {/* <div className="min-h-[6.8rem]">
            
          </div> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<ArtistPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default App;
