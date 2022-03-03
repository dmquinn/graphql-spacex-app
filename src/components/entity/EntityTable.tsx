import { FC } from 'react';
import { ENTITY_DETAIL_ROUTE } from '../../Routes';
import { generatePath, Link } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import { Table } from 'antd';

type Entity = {
  id: uuid;
  name: string;
  someValue?: string;
};

const EntityTable: FC = () => {
  const entities: Entity[] = [
    {
      id: 'bdeadc8c-9999-469c-b77e-25a3eeebd915',
      name: 'Entity 1',
      someValue: 'Lorem ipsum dolor',
    },
    {
      id: '93444e22-e3d1-4067-bbe2-7b2aebf9f415',
      name: 'Entity 2',
      someValue: ' Lorem ipsum dolor sit amet, consetetur sadipscing',
    },
    {
      id: '3d167f14-fd0a-48b5-b845-8c062537a0d8',
      name: 'Entity 3',
      someValue: 'Lorem ipsum dolor sit',
    },
  ];

  const columns: ColumnsType<Entity> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    },
    {
      title: 'Some Value',
      dataIndex: 'someValue',
    },
    {
      key: 'action',
      render: (_, entity) => (
        <Link to={generatePath(ENTITY_DETAIL_ROUTE, { id: entity.id })}>
          Open
        </Link>
      ),
    },
  ];

  return <Table<Entity> columns={columns} dataSource={entities} rowKey="id" />;
};

export default EntityTable;
