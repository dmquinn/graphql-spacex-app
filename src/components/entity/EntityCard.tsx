import { Card } from 'antd';
import { FC } from 'react';

type EntityCardProps = {
  id: uuid;
};

const EntityCard: FC<EntityCardProps> = ({ id }) => (
  <Card title="Entity Detail">
    {id}
    {Array.from(Array(100).keys()).map(() => (
      <>
        test <br />
      </>
    ))}
  </Card>
);

export default EntityCard;
