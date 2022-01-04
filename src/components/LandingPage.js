import { Row, Col, Typography, Menu, Button, Image } from "antd";
import Navbar from "./Navbar";

import ImageLandingPage from "../assets/landingPage.png";

const { Text, Title, Paragraph } = Typography;

const Description = () => (
  <Row justify="center" align="middle" style={{ height: "100vh" }}>
    <Col span={12}>
      <Title>Tempat cari sepeda langsung dari pabriknya</Title>
      <Paragraph type="secondary">
        GudangSepeda merupakan toko sepeda yang menjual sepeda beserta
        perlengkapannya langsung dari kiriman pabrik. Dapatkan harga termurah
        langsung dari tangan pertama.
      </Paragraph>
      <Button
        type="primary"
        danger
        style={{ borderRadius: 5, marginTop: "50px" }}
      >
        Lihat Sepeda
      </Button>
    </Col>
  </Row>
);

export default function LandingPage() {
  return (
    <Col span={24}>
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col
          span={12}
          style={{
            backgroundColor: "#FFF9F1",
          }}
        >
          <Description />
        </Col>
        <Col span={12}>
          <img src={ImageLandingPage} alt="foto sepeda" height="100%" />
        </Col>
      </Row>
    </Col>
  );
}
