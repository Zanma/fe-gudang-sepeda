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
import Alasan from "../../components/Alasan";
import Footer from "../../components/Footer";
import JenisSepeda from "../../components/JenisSepeda";
import LandingPage from "../../components/LandingPage";

export default function Homepage() {
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
