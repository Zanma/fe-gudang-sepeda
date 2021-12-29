import { Row, Col, Typography, Menu } from "antd";

const { Text } = Typography;

export default function Navbar() {
  return (
    <Row>
      <Col span={11} offset={1}>
        <Text>Logo</Text>
      </Col>
      <Col span={11}>
        <Menu mode="horizontal" style={{ border: "none", float: "right" }}>
          <Menu.Item key="SepedaAnak">Sepeda Anak</Menu.Item>
          <Menu.Item key="SepedaLipat">Sepeda Lipat</Menu.Item>
          <Menu.Item key="BMX">BMX</Menu.Item>
          <Menu.Item key="Sepeda Gunung">Sepeda Gunung</Menu.Item>
          <Menu.Item key="Kontak">Kontak</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}
