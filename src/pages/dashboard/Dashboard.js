// Todo

// Navbar
// Header
// ListSepeda

import { useState, useEffect, useContext } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Row, Col, Typography, Menu, Card } from "antd";

import Navbar from "../../components/Navbar";
import { ProductContext } from "../../context/ProductContext";

const { Title, Text } = Typography;

const DashboardHeader = ({ filterProduct }) => {
  const navigate = useNavigate();
  const { jenisSepeda } = useParams();

  const handleClick = (e) => {
    navigate("/dashboard/" + e.key); //gk ngaruh logic, cuma estetik url
    filterProduct(e.key); //melempar trigger jenisSepeda ke componen atas untuk difilter & ditampilkan
  };

  return (
    <Row>
      <Col span={7} offset={2}>
        <Title>Pilih sepeda sesuai kebutuhanmu</Title>
      </Col>
      <Col span={24}>
        <Row
          style={{
            marginBottom: "20px",
          }}
        >
          <Col span={10} offset={2}>
            <Menu
              mode="horizontal"
              onClick={handleClick}
              selectedKeys={jenisSepeda} //berubah sesuai parameter url
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
    <Row
      justify="start"
      gutter={[40, 50]}
      style={{
        margin: "0px 100px",
        marginBottom: "50px",
      }}
    >
      {products.map((products) => (
        <Col span={6} key={products.id}>
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
  const { product } = useContext(ProductContext);

  console.log(product);

  const { jenisSepeda } = useParams();

  const [filteredProduct, setFilteredProduct] = useState([]);

  //melakukan filter dengan parameter jenisSepeda dari component "Dashboard header"
  const filterProduct = (pilihan) => {
    if (pilihan !== "semua") {
      setFilteredProduct(
        product.filter((product) => product.jenisSepeda === pilihan)
      ); //mesti pakai tambahan setFilteredProduct, kalau langsung pke setProduct(), ntar ilang data product rawnya
    } else {
      setFilteredProduct(product); //coba cek lagi disini, dikasih logic
    }
  };

  useEffect(() => {
    filterProduct(jenisSepeda); //melakukan filter berdasar pilihan user dr homepage, ketika pertama kali render
  }, [jenisSepeda]);

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
