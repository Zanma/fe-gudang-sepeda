import { Row, Col, Typography, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Row>
      <Col span={13} offset={1}>
        <Text onClick={() => navigate("/")}>Logo</Text>
      </Col>
      <Col span={9}>
        <Menu mode="horizontal" style={{ border: "none", float: "right" }}>
          <Menu.Item
            key="SepedaAnak"
            onClick={() => navigate("/dashboard/sepedaAnak")}
          >
            Sepeda Anak
          </Menu.Item>
          <Menu.Item key="SepedaLipat">Sepeda Lipat</Menu.Item>
          <Menu.Item key="BMX">BMX</Menu.Item>
          <Menu.Item key="Sepeda Gunung">Sepeda Gunung</Menu.Item>
          <Menu.Item key="Kontak">Kontak</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}
