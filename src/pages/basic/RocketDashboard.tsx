import { FC, useEffect, useState } from 'react';
import Rockets from '../../gql';
import RocketTypes from '../../components/RocketDashboardCards/RocketTypes';
import FailureRates from '../../components/RocketDashboardCards/FailureRates';
import PayloadPerMonth from '../../components/RocketDashboardCards/PayloadPerMonth';

const RocketDashboard: FC = () => {
  const [data, setData] = useState<any>([]);
  const [launches, setLaunches] = useState<any>([]);

  const loadRocketData = async () => {
    const rocketData = await Rockets.getRockets();
    rocketData.launches.length && setData(rocketData.launches);
    rocketData.launchesPast.length && setLaunches(rocketData.launchesPast);
  };
  useEffect(() => {
    loadRocketData();
  });
  // eslint-disable-next-line no-console

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
      <RocketTypes rockets={data} />
      <FailureRates launches={launches} />
      <PayloadPerMonth payloads={launches} />
    </div>
  );
};

export default RocketDashboard;
