import { FC, useEffect, useState } from 'react';
import { GetLaunchesQuery, useGetLaunchesQuery } from '../../generated/graphql';
import { Card } from 'antd';
import RocketTypes from '../../components/RocketDashboardCards/RocketTypes';
import FailureRates from '../../components/RocketDashboardCards/FailureRates';
import PayloadPerMonth from '../../components/RocketDashboardCards/PayloadPerMonth';

const RocketDashboard: FC = () => {
  const { loading, data, error } = useGetLaunchesQuery();

  const [launches, setLaunches] = useState<GetLaunchesQuery['launches']>([]);
  const [launchesPast, setLaunchesPast] = useState<
    GetLaunchesQuery['launchesPast']
  >([]);

  useEffect(() => {
    if (data?.launches?.length) setLaunches(data.launches);
    if (data?.launchesPast?.length) setLaunchesPast(data.launchesPast);
  }, [data, loading, error]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{`Error: ${error}`}</h1>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-10">
      <Card title="Rocket Types">
        <RocketTypes rockets={launches} />
      </Card>
      <Card title="Failure Rates %">
        <FailureRates launches={launchesPast} />
      </Card>
      <Card title="Payloads Per Month">
        <PayloadPerMonth payloads={launchesPast} />
      </Card>
    </div>
  );
};

export default RocketDashboard;
