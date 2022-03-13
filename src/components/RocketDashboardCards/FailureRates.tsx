import { FC } from 'react';
import { Column } from '@ant-design/plots';

type RocketProps = {
  launches: Array<any>;
};
const FailureRates: FC<RocketProps> = ({ launches }) => {
  const overallFailureRate =
    (launches.filter((item) => item.launch_success === false).length * 100) /
    launches.length;
  // current failure rate approximated by years since 2015
  const currentFailureRate =
    (launches.filter(
      (item) =>
        item.launch_success === false && parseInt(item.launch_year, 10) > 2015
    ).length *
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
    data: data.reverse(),
    isStack: true,
    yField: 'value',
    xField: 'timeline',
    padding: 8,
    label: {
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
      ],
    },
    colorField: 'type', // or seriesField in some cases
    color: ['#d62728', '#2ca02c', '#000000'],
  };
  return <Column {...config} />;
};
export default FailureRates;
