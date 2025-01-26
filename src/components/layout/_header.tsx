import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { SidebarProps } from "./_sidebar";

const LayoutHeader : React.FC<SidebarProps> = ({collapsed, setCollapsed}) => {
  return (
    <Header
          style={{
            padding: '0',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '18px',
              padding: "20px",
              background: "#001925",
              color: "#fff",
              marginTop: "105px",
              borderRadius: 0,
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          />
        </Header>
  );
};

export default LayoutHeader;