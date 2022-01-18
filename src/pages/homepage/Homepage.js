// Todo

// Hompage
// _Navbar
// __Dashboard(bawa state jenisSepeda)
// __Kontak
// _LandingPage
// __Dashboard
// _Alasan
// __KontenAlasan
// _JenisSepeda
// __KontenJenisSepeda
//_Footer

import { Row, Col } from "antd";
import { useContext, useEffect } from "react";

import Alasan from "../../components/Alasan";
import Footer from "../../components/Footer";
import JenisSepeda from "../../components/JenisSepeda";
import LandingPage from "../../components/LandingPage";
import { ProductContext } from "../../context/ProductContext";

export default function Homepage() {
  const { setProduct } = useContext(ProductContext);

  const fetchProduct = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Row>
      <Col span={24}>
        <LandingPage />
      </Col>
      <Col span={24}>
        <Alasan />
      </Col>
      <Col span={24}>
        <JenisSepeda />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}
