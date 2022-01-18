import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Homepage from "./pages/homepage/Homepage.js";
import DetailSepeda from "./pages/detailSepeda/DetailSepeda.js";
import Dashboard from "./pages/dashboard/Dashboard.js";
import { ProductContext } from "../src/context/ProductContext.js";

function App() {
  const [product, setProduct] = useState([]);

  return (
    <div>
      <Router>
        <ProductContext.Provider value={{ product, setProduct }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard/:jenisSepeda" element={<Dashboard />} />
            <Route path="/detail/:id" element={<DetailSepeda />} />
          </Routes>
        </ProductContext.Provider>
      </Router>
    </div>
  );
}

export default App;
