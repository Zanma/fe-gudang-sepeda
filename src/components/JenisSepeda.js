import { Row, Col, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import sepedaGunung from "../assets/sepedaGunung.png";

const { Meta } = Card;
const { Title } = Typography;

const ListJenisSepeda = () => {
  const navigate = useNavigate();

  return (
    <Row justify="center">
      <Col span={4}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 300,
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
      <Col span={4}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 300,
            border: "0.5px solid rgba(155,155,155,0.3)",
          }}
          cover={<img alt="example" src={sepedaGunung} />}
          onClick={() => navigate("/dashboard/sepedaBMX")}
        >
          <Meta
            title="Sepeda Gunung (MTB)"
            description="Sepeda yang cocok bagi Anda ingin merasakan sepeda gunung serbaguna untuk off-road ringan di akhir pekan"
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 300,
            border: "0.5px solid rgba(155,155,155,0.3)",
          }}
          cover={<img alt="example" src={sepedaGunung} />}
        >
          <Meta
            title="Sepeda Gunung (MTB)"
            description="Sepeda yang cocok bagi Anda ingin merasakan sepeda gunung serbaguna untuk off-road ringan di akhir pekan"
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 300,
            border: "0.5px solid rgba(155,155,155,0.3)",
          }}
          cover={<img alt="example" src={sepedaGunung} />}
        >
          <Meta
            title="Sepeda Gunung (MTB)"
            description="Sepeda yang cocok bagi Anda ingin merasakan sepeda gunung serbaguna untuk off-road ringan di akhir pekan"
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
