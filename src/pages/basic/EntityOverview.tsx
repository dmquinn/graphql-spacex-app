import { FC } from 'react';
import EntityCreateButton from '../../components/entity/EntityCreateButton';
import EntityTable from '../../components/entity/EntityTable';

const EntityOverview: FC = () => (
  <div className="space-y-4 text-right">
    <EntityCreateButton />
    <EntityTable />
  </div>
);

export default EntityOverview;
