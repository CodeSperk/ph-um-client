import { useState } from 'react';
import { Layout} from 'antd';

import {  Outlet } from 'react-router-dom';
import Sidebar from './_sidebar';
import LayoutHeader from './_header';

const { Content} = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: '100vh' }}>
     <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Layout style={{ marginLeft: collapsed ? 0 : 200, transition: 'margin-left 0.3s' }}>
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
