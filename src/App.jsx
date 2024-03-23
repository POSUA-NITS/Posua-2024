import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Events, Home, Team, Sponsors, Borhomthuri, Gallery } from "./Pages/index";

const App = () => {
  return (
    <main>
      {/* <h1 className="text-4xl font-bold underline text-red-600">Navbar</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/borhomthuri" element={<Borhomthuri />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
