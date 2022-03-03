import { FC } from 'react';
import { useParams } from 'react-router-dom';
import EntityCard from '../../components/entity/EntityCard';

const EntityDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <></>;

  return <EntityCard id={id} />;
};

export default EntityDetail;
