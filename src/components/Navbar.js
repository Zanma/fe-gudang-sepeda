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
        <Menu
          mode="horizontal"
          selectedKeys={""} //biar gk ke save selected langsung ilang
          style={{ border: "none", float: "right" }}
        >
          <Menu.Item
            key="SepedaAnak"
            onClick={() => navigate("/dashboard/sepedaAnak")}
          >
            Sepeda Anak
          </Menu.Item>
          <Menu.Item
            key="SepedaLipat"
            onClick={() => navigate("/dashboard/sepedaLipat")}
          >
            Sepeda Lipat
          </Menu.Item>
          <Menu.Item key="BMX" onClick={() => navigate("/dashboard/sepedaBMX")}>
            BMX
          </Menu.Item>
          <Menu.Item
            key="Sepeda Gunung"
            onClick={() => navigate("/dashboard/sepedaGunung")}
          >
            Sepeda Gunung
          </Menu.Item>
          <Menu.Item key="Kontak">Kontak</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}
