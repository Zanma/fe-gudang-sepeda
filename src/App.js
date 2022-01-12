import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage.js";
import DetailSepeda from "./pages/detailSepeda/DetailSepeda.js";
import Dashboard from "./pages/dashboard/Dashboard.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard/:jenisSepeda" element={<Dashboard />} />
          <Route path="/detail/:id" element={<DetailSepeda />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
