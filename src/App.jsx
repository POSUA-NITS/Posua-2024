import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Events, Home } from "./Pages/index";

const App = () => {
  return (
    <main>
      {/* <h1 className="text-4xl font-bold underline text-red-600">Navbar</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
