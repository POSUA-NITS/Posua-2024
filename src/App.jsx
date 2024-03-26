import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Loading from "./Components/Loader/Loading";
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

const App = () => {
  return (
    <main>
      {/* <h1 className="text-4xl font-bold underline text-red-600">Navbar</h1> */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<ArtistPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default App;
