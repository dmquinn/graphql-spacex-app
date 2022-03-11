import { FC, useEffect, useState } from 'react';
import Rockets from '../../gql';
import RocketTypes from '../../components/RocketDashboardCards/RocketTypes';
import FailureRates from '../../components/RocketDashboardCards/FailureRates';
import PayloadPerMonth from '../../components/RocketDashboardCards/PayloadPerMonth';

const RocketDashboard: FC = () => {
  const [launches, setLaunches] = useState<any>([]);
  const [launchesPast, setLaunchesPast] = useState<any>([]);

  const loadRocketData = async () => {
    const rocketData = await Rockets.getRockets();
    rocketData.launches.length && setLaunches(rocketData.launches);
    rocketData.launchesPast.length && setLaunchesPast(rocketData.launchesPast);
  };
  useEffect(() => {
    loadRocketData();
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
      <RocketTypes rockets={launches} />
      <FailureRates launches={launchesPast} />
      <PayloadPerMonth payloads={launchesPast} />
    </div>
  );
};

export default RocketDashboard;
