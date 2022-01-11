import { useNavigate } from "react-router-dom";

import { Row, Col, Typography, Button, Image } from "antd";
import Navbar from "../../components/Navbar";

import iconBack from "../../assets/iconBack.png";
import detailFotoSepeda from "../../assets/detailFotoSepeda.png";

const { Text, Title } = Typography;

const DeskripsiDetailSepeda = () => {
  const navigate = useNavigate();
  return (
    <Row
      style={{ backgroundColor: "#FFF9F1", paddingTop: "70px", height: "100%" }}
    >
      <Col span={24}>
        <Row>
          <Col span={2} offset={1}>
            <a onClick={() => navigate("/dashboard")}>
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
            <Title>FOLDING POCKET ROCKET</Title>
          </Col>
          <Col span={15}>
            <Title type="danger" level={2}>
              Rp 1.250.000
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
                      20"
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
                      Karet
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
                      Tidak ada
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

const DetailFotoSepeda = () => (
  <Row style={{ padding: "50px 0" }}>
    <Col span={23} offset={1}>
      <Image width="100%" height="auto" src={detailFotoSepeda} />
    </Col>
    <Col span={22} offset={2}>
      <Row>
        <Col></Col>
      </Row>
    </Col>
  </Row>
);

export default function DetailSepeda() {
  return (
    <Row>
      <Col span={24}>
        <Navbar />
      </Col>
      <Col span={11}>
        <DeskripsiDetailSepeda />
      </Col>
      <Col span={13}>
        <DetailFotoSepeda />
      </Col>
    </Row>
  );
}
