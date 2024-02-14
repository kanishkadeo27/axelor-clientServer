import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fetch from "./components/Fetch";
import Axios from "./components/Axios";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
          <Route path="/fetch-api" element={<Fetch />} />
          <Route path="/axios" element={<Axios />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
