import { DashboardOutlined, RocketOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ENTITY_OVERVIEW_ROUTE, ROCKET_DASHBOARD_ROUTE } from '../Routes';

const BasicLayout: FC = () => (
  <Layout className="!h-screen">
    <Layout.Sider collapsible>
      <Link to="/">
        <div className="m-4 h-12 bg-gray-400/50" />
      </Link>
      <Menu theme="dark" selectedKeys={[]}>
        <Menu.Item icon={<DashboardOutlined />} key="a1">
          <Link to={ENTITY_OVERVIEW_ROUTE}>Entity</Link>
        </Menu.Item>
        <Menu.Item icon={<RocketOutlined />} key="a2">
          <Link to={ROCKET_DASHBOARD_ROUTE}>Rocket Dashboard</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
    <Layout className="overflow-auto">
      <Layout.Content className="m-4">
        <Outlet />
      </Layout.Content>
      <Layout.Footer className="text-center">
        Canida Software GmbH
      </Layout.Footer>
    </Layout>
  </Layout>
);

export default BasicLayout;
