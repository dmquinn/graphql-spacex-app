import { LoginOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';
import { FC } from 'react';

// dummy login

const Login: FC = () => (
  <div className="sm:w-full md:w-6/12 lg:w-5/12 xl:w-5/12 2xl:w-4/12 mx-auto p-4">
    <Card title="Login">
      <Form layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Passwort"
          name="password"
          rules={[{ required: true, message: 'Password is required!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<LoginOutlined />} htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
);

export default Login;
