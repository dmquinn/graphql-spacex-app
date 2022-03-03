import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';

const EntityCreateButton: FC = () => (
  <Button icon={<PlusOutlined />}>Create Entity</Button>
);

export default EntityCreateButton;
