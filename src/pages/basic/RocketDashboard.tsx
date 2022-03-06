import { FC, useEffect, useState } from 'react';
import Rockets from '../../gql';
import RocketTypes from '../../components/RocketDashboardCards/RocketTypes';
import FailureRates from '../../components/RocketDashboardCards/FailureRates';

const RocketDashboard: FC = () => {
  const [data, setData] = useState([]);
  const loadRocketData = async () => {
    const rocketData = await Rockets.getRockets(10);
    setData(rocketData);
  };
  useEffect(() => {
    loadRocketData();
  });
  // eslint-disable-next-line no-console
  console.log('data', data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <RocketTypes />
      <FailureRates />
    </div>
  );
};

export default RocketDashboard;
