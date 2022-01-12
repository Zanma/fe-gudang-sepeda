import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Row, Col, Typography, Button, Image } from "antd";
import Navbar from "../../components/Navbar";

import iconBack from "../../assets/iconBack.png";
import detailFotoSepeda from "../../assets/detailFotoSepeda.png";

const { Text, Title } = Typography;

const DeskripsiDetailSepeda = ({ detailProduct }) => {
  const navigate = useNavigate();

  return (
    <Row
      style={{ backgroundColor: "#FFF9F1", paddingTop: "70px", height: "100%" }}
    >
      <Col span={24}>
        <Row>
          <Col span={2} offset={1}>
            <a onClick={() => navigate("/dashboard/semua")}>
              <img
                src={iconBack}
                alt=""
                // oncClick={() => navigate("/dashboard")}
              />
            </a>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "60px" }}>
          <Col span={15}>
            <Title>{detailProduct.title}</Title>
          </Col>
          <Col span={15}>
            <Title type="danger" level={2}>
              {detailProduct.price}
            </Title>
          </Col>
          <Col span={15}>
            <Row
              style={{
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                margin: "60px 0",
                padding: "20px 0",
              }}
            >
              <Col span={8} offset={1}>
                <Row>
                  <Col span={24}>
                    <Text type="secondary">Ukuran Roda</Text>
                  </Col>
                  <Col span={24}>
                    <Text strong style={{ fontSize: "24px" }}>
                      {detailProduct.ukuranRoda}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col span={7}>
                <Row>
                  <Col span={24}>
                    <Text type="secondary">Jenis Ban</Text>
                  </Col>
                  <Col span={24}>
                    <Text strong style={{ fontSize: "24px" }}>
                      {detailProduct.jenisBan}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col span={7}>
                <Row>
                  <Col span={24}>
                    <Text type="secondary">Musik</Text>
                  </Col>
                  <Col span={24}>
                    <Text strong style={{ fontSize: "24px" }}>
                      {detailProduct.musik}
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={15}>
            <Row justify="start" gutter={[20]}>
              <Col>
                <Button danger>Cek ke Toko</Button>
              </Col>
              <Col>
                <Button
                  danger
                  type="primary"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=081225273320text=Permisi kak, mau pesan sepeda"
                >
                  Pesan Sepeda
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const DetailFotoSepeda = ({ detailProduct }) => (
  <Row style={{ padding: "50px 0" }}>
    <Col span={23} offset={1}>
      <Image width="100%" height="auto" src={detailProduct.pict} />
    </Col>
    <Col span={22} offset={2}>
      <Row>
        <Col></Col>
      </Row>
    </Col>
  </Row>
);

export default function DetailSepeda() {
  const [detailProduct, setDetailProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    console.log(data);
    setDetailProduct(data);
  };

  return (
    <Row>
      <Col span={24}>
        <Navbar />
      </Col>
      <Col span={11}>
        <DeskripsiDetailSepeda detailProduct={detailProduct} />
      </Col>
      <Col span={13}>
        <DetailFotoSepeda detailProduct={detailProduct} />
      </Col>
    </Row>
  );
}
