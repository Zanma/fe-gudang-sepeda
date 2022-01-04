import { Row, Col, Typography } from "antd";

import iconEmail from "../assets/iconEmail.png";
import iconWA from "../assets/iconWA.png";
import iconPhone from "../assets/iconPhone.png";
import iconTwitter from "../assets/iconTwitter.png";
import iconIG from "../assets/iconIG.png";
import iconYT from "../assets/iconYT.png";
import iconFacebook from "../assets/iconFacebook.png";
import iconMap from "../assets/iconMap.png";

const { Title, Text } = Typography;

const KontakFooter = () => (
  <Row>
    <Col span={24}>
      <Title>Gudang Sepeda</Title>
    </Col>
    <Col span={17}>
      <Row
        gutter={[0, 10]}
        style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
      >
        <Col span={24}>
          <img src={iconEmail} alt="" />
          <Text strong style={{ marginLeft: "10px" }}>
            gudangsepeda@gmail.com
          </Text>
        </Col>
        <Col span={24}>
          <img src={iconWA} alt="" />
          <Text strong style={{ marginLeft: "10px" }}>
            +62 81225273320
          </Text>
        </Col>
        <Col span={24}>
          <img src={iconEmail} alt="" />
          <Text strong style={{ marginLeft: "10px" }}>
            +62 81225273320
          </Text>
        </Col>
      </Row>
    </Col>
    <Col span={24}>
      <Row style={{ marginTop: "10px" }}>
        <Col span={3}>
          <img src={iconTwitter} alt="" />
        </Col>
        <Col span={3}>
          <img src={iconIG} alt="" />
        </Col>
        <Col span={3}>
          <img src={iconYT} alt="" />
        </Col>
        <Col span={3}>
          <img src={iconFacebook} alt="" />
        </Col>
      </Row>
    </Col>
  </Row>
);

const Alamat = () => (
  <Row style={{ marginTop: "15px" }}>
    <Col span={24}>
      <Title level={4}>Alamat</Title>
    </Col>
    <Col span={24}>
      <Row>
        <Col span={2}>
          <img src={iconMap} alt="" />
        </Col>
        <Col span={15}>
          <Text>
            Gg. Tirtotejo 2 no47 cat hijau jetis Rt03 Rw10, Dusun III,
            Makamhaji, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57161
          </Text>
        </Col>
      </Row>
    </Col>
  </Row>
);

const ProdukFooter = () => (
  <Row style={{ marginTop: "15px" }}>
    <Col span={24}>
      <Title level={4}>Produk</Title>
    </Col>
    <Col span={24}>
      <Text>Sepeda Anak</Text>
    </Col>
    <Col span={24}>
      <Text>Sepeda Lipat</Text>
    </Col>
    <Col span={24}>
      <Text>BMX</Text>
    </Col>
    <Col span={24}>
      <Text>Sepeda Gunung</Text>
    </Col>
  </Row>
);

export default function Footer() {
  return (
    <Row
      style={{
        marginTop: "100px",
        backgroundColor: "#FFF9F1",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Col span={5} offset={3}>
        <KontakFooter />
      </Col>
      <Col span={7} offset={1}>
        <Alamat />
      </Col>
      <Col span={3} offset={2}>
        <ProdukFooter />
      </Col>
    </Row>
  );
}
