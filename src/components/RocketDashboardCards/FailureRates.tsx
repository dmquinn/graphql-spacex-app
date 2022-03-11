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
      value: (100 - overallFailureRate).toFixed(3),
      type: 'Success %',
    },
    {
      timeline: 'current',
      value: (100 - currentFailureRate).toFixed(3),
      type: 'Success %',
    },
    {
      timeline: 'overall',
      value: overallFailureRate.toFixed(3),
      type: 'Failure %',
    },
    {
      timeline: 'current',
      value: currentFailureRate.toFixed(3),
      type: 'Failure %',
    },
  ];
  const config = {
    data: data.reverse(),
    isStack: true,
    yField: 'value',
    xField: 'timeline',
    // seriesField: 'type',
    color: ['#062c43', '#9ccddc'],
    label: {
      layout: [
        {
          type: 'interval-adjust-position',
        },
        // {
        //   type: 'interval-hide-overlap',
        // },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Column {...config} />;
};
export default FailureRates;
