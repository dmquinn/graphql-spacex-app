import { FC } from 'react';
import { Column } from '@ant-design/plots';
import { GetLaunchesQuery } from '../../generated/graphql';

type RocketProps = {
  launches: GetLaunchesQuery['launchesPast'];
};
const FailureRates: FC<RocketProps> = ({ launches }) => {
  let overallFailureRate = 0;
  let currentFailureRate = 0;

  if (!launches?.length) return null;
  overallFailureRate =
    (launches.filter((item) => item?.launch_success === false).length * 100) /
    launches.length;
  // eslint-disable-next-line no-console
  console.log(overallFailureRate);

  // current failure rate approximated by years since 2015
  currentFailureRate =
    (launches.filter((item) => {
      if (item?.launch_success === false && item?.launch_year)
        return parseInt(item?.launch_year.toString(), 10) > 2015;
    }).length *
      100) /
    launches.length;

  const data = [
    {
      timeline: 'overall',
      value: overallFailureRate,
      type: 'Failure %',
    },
    {
      timeline: 'current',
      value: currentFailureRate,
      type: 'Failure %',
    },
  ];
  const config = {
    data,
    xField: 'timeline',
    yField: 'value',
    columnStyle: {
      fill: '#062c43',
    },
    label: {
      style: {
        fill: '#FFFFFF',
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};
export default FailureRates;
