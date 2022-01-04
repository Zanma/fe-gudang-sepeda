import { Row, Col, Typography, Image } from "antd";
import iconPabrik from "../assets/iconPabrik.png";
import iconOngkir from "../assets/iconOngkir.png";
import iconCod from "../assets/iconCod.png";

const { Text, Title, Paragraph } = Typography;

const ListAlasan = () => (
  <Row style={{ marginTop: "20px", textAlign: "center" }}>
    <Col span={8}>
      <Image src={iconPabrik} preview={false} />
      <Title level={4}>Langsung Dari Pabrik</Title>
      <Paragraph type="secondary">
        Dapatkan harga termurah, tangan pertama langsung dari pabriknya
      </Paragraph>
    </Col>
    <Col span={8}>
      <Image src={iconOngkir} preview={false} />
      <Title level={4}>Gratis Ongkos Kirim</Title>
      <Paragraph type="secondary">
        Sepeda sampai ke rumah tanpa biaya ongkos kirim
      </Paragraph>
    </Col>
    <Col span={8}>
      <Image src={iconCod} preview={false} />
      <Title level={4}>Bayar COD</Title>
      <Paragraph type="secondary">
        Bayar sepeda pakai sistem COD, barang sampai baru bayar. Dijamin aman.
      </Paragraph>
    </Col>
  </Row>
);

export default function Alasan() {
  return (
    <Col span={24}>
      <Row justify="center" style={{ marginTop: "70px" }}>
        <Col span={20}>
          <Row
            justify="center"
            style={{ padding: "42px", backgroundColor: "#FFF9F1" }}
          >
            <Col span={24}>
              <Title style={{ textAlign: "center" }}>
                Kenapa Gudang Sepeda?
              </Title>
            </Col>
            <Col span={24}>
              <ListAlasan />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
