import { Layout } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => (
  <Layout className="!min-h-screen !bg-[url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')] !bg-no-repeat !bg-center !bg-cover">
    <Layout.Header className="text-center !text-gray-200">
      React App
    </Layout.Header>
    <Layout.Content>
      <Outlet />
    </Layout.Content>
    <Layout.Footer className="text-center !bg-transparent">
      Canida Software GmbH
    </Layout.Footer>
  </Layout>
);

export default AuthLayout;
