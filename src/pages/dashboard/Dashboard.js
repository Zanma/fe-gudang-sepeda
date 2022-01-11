// Todo

// Navbar
// Header
// ListSepeda

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Row, Col, Typography, Menu, Card } from "antd";

import Navbar from "../../components/Navbar";

import sepedaGunung from "../../assets/sepedaGunung.png";

const { Title, Text } = Typography;
const { Meta } = Card;

const DashboardHeader = () => (
  <Row>
    <Col span={5} offset={2}>
      <Title>Pilih sepeda sesuai kebutuhanmu</Title>
    </Col>
    <Col span={24}>
      <Row>
        <Col span={10} offset={2}>
          <Menu mode="horizontal" selectedKeys={"semua"}>
            <Menu.Item key="semua">Semua</Menu.Item>
            <Menu.Item key="Sepeda Anak">Sepeda Anak</Menu.Item>
            <Menu.Item key="Sepeda Lipat">Sepeda Lipat</Menu.Item>
            <Menu.Item key="BMX">BMX</Menu.Item>
            <Menu.Item key="Sepeda Gunung">Sepeda Gunung</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Col>
  </Row>
);

const ListSepeda = ({ products }) => {
  const navigate = useNavigate();

  return (
    <Row justify="start" gutter={[40, 50]}>
      {products.map((products) => (
        <Col span={5} key={products.id}>
          <Card
            hoverable
            bordered={false}
            style={{
              border: "0.5px solid rgba(155,155,155,0.3)",
            }}
            cover={<img alt="example" src={products.pict} />}
            onClick={() => navigate("/detail")}
          >
            <Title level={4}>{products.title}</Title>
            <Text strong level={4} type="danger">
              {products.price}
            </Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default function Dashboard() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "FOLDING POCKET ROCKET",
      pict: sepedaGunung,
      price: "Rp Rp 1.250.000",
      ukuranRoda: "20",
      jenisBan: "Karet",
      musik: "Tidak ada",
    },
    {
      id: 2,
      title: "FOLDING POCKET ROCKET 2",
      pict: sepedaGunung,
      price: "Rp Rp 1.250.000",
      ukuranRoda: "20",
      jenisBan: "Karet",
      musik: "Tidak ada",
    },
  ]);

  return (
    <Row>
      <Col span={24}>
        <Navbar />
      </Col>
      <Col span={24}>
        <DashboardHeader />
      </Col>
      <Col span={24}>
        <ListSepeda products={product} />
      </Col>
    </Row>
  );
}
