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
const Borhomthuri = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Borhomthuri }))
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
            <Route path="/borhomthuri" element={<Borhomthuri />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default App;
