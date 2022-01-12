// Todo

// Navbar
// Header
// ListSepeda

import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Row, Col, Typography, Menu, Card } from "antd";

import Navbar from "../../components/Navbar";
import JenisSepeda from "../../components/JenisSepeda";

const { Title, Text } = Typography;

const DashboardHeader = ({ filterProduct }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("semua");

  const handleClick = (e) => {
    navigate("/dashboard/" + e.key); //gk ngaruh logic, cuma estetik url
    setCurrent(e.key);
    filterProduct(e.key); //melempar trigger jenisSepeda ke componen atas untuk difilter & ditampilkan
  };

  return (
    <Row>
      <Col span={5} offset={2}>
        <Title>Pilih sepeda sesuai kebutuhanmu</Title>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={10} offset={2}>
            <Menu
              mode="horizontal"
              onClick={handleClick}
              selectedKeys={current}
            >
              <Menu.Item key="semua">Semua</Menu.Item>
              <Menu.Item key="sepedaAnak">Sepeda Anak</Menu.Item>
              <Menu.Item key="sepedaLipat">Sepeda Lipat</Menu.Item>
              <Menu.Item key="sepedaBMX">BMX</Menu.Item>
              <Menu.Item key="sepedaGunung">Sepeda Gunung</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

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
            onClick={() => navigate("/detail/" + products.id)}
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
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProduct(data);
    setFilteredProduct(data); //melakukan inisiasi nilai filteredProduct
  };

  //melakukan filter dengan parameter jenisSepeda dari component "Dashboard header"
  const filterProduct = (jenisSepeda) => {
    if (jenisSepeda !== "semua") {
      setFilteredProduct(
        product.filter((product) => product.jenisSepeda === jenisSepeda)
      ); //mesti pakai tambahan setFilteredProduct, kalau langsung pke setProduct(), ntar ilang data product rawnya
    } else {
      setFilteredProduct(product);
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Navbar />
      </Col>
      <Col span={24}>
        <DashboardHeader filterProduct={filterProduct} />
      </Col>
      <Col span={24}>
        <ListSepeda products={filteredProduct} />
      </Col>
    </Row>
  );
}
