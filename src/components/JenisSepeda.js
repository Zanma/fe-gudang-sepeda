import { Row, Col, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import sepedaGunung from "../assets/sepedaGunung.png";
import sepedaLipat from "../assets/sepedaLipatBiru.png";
import sepedaBMX from "../assets/sepedaBMXPutih.png";
import sepedaAnak from "../assets/sepedaAnakPink.png";

const { Meta } = Card;
const { Title } = Typography;

const ListJenisSepeda = () => {
  const navigate = useNavigate();

  return (
    <Row justify="center">
      <Col lg={{ span: 4 }} xxl={{ span: 3 }}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 265,
            height: 335,
            border: "0.5px solid rgba(155,155,155,0.3)",
          }}
          cover={<img alt="example" src={sepedaGunung} />}
          onClick={() => navigate("/dashboard/sepedaGunung")}
        >
          <Meta
            title="Sepeda Gunung (MTB)"
            description="Sepeda yang cocok bagi Anda ingin merasakan sepeda gunung serbaguna untuk off-road ringan di akhir pekan"
          />
        </Card>
      </Col>
      <Col lg={{ span: 4, offset: 1 }} xxl={{ span: 3 }}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 265,
            height: 335,
            border: "0.5px solid rgba(155,155,155,0.3)",
          }}
          cover={<img alt="example" src={sepedaLipat} />}
          onClick={() => navigate("/dashboard/sepedaLipat")}
        >
          <Meta
            title="Sepeda Lipat"
            description="Sepeda lipat yang cocok bagi Anda untuk menjelajahi kota"
          />
        </Card>
      </Col>
      <Col lg={{ span: 4, offset: 1 }} xxl={{ span: 3 }}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 265,
            height: 335,
            border: "0.5px solid rgba(155,155,155,0.3)",
          }}
          cover={<img alt="example" src={sepedaBMX} />}
          onClick={() => navigate("/dashboard/sepedaBMX")}
        >
          <Meta
            title="Sepeda BMX"
            description="Sepeda yang cocok bagi Anda pecinta olahraga sepeda ekstrim, melakukan trik dan gerakan memukau"
          />
        </Card>
      </Col>
      <Col lg={{ span: 4, offset: 1 }} xxl={{ span: 3 }}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 265,
            height: 335,
            border: "0.5px solid rgba(155,155,155,0.3)",
          }}
          cover={<img alt="example" src={sepedaAnak} />}
          onClick={() => navigate("/dashboard/sepedaAnak")}
        >
          <Meta
            title="Sepeda Anak"
            description="Sepeda yang cocok untuk menemani bersepeda buah hati anda"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default function JenisSepeda() {
  return (
    <Row justify="center" gutter={[0, 30]} style={{ marginTop: "100px" }}>
      <Col span={24}>
        <Title style={{ textAlign: "center" }}>Mau cari sepeda apa?</Title>
      </Col>
      <Col span={24}>
        <ListJenisSepeda />
      </Col>
    </Row>
  );
}
