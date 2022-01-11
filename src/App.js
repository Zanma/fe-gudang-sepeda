import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import Homepage from "./pages/homepage/Homepage.js";
import DetailSepeda from "./pages/detailSepeda/DetailSepeda.js";
import Dashboard from "./pages/dashboard/Dashboard.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detail" element={<DetailSepeda />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
