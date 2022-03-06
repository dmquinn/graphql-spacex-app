import { FC } from 'react';
import { Column } from '@ant-design/plots';

const data = [
  {
    rocket: 'Falcon 1',
    value: 1,
    type: 'Failure',
  },
  {
    rocket: 'Falcon 1e',
    value: 1,
    type: 'Failure',
  },
  {
    rocket: 'Falcon 9 v1.1',
    value: 2,
    type: 'Failure',
  },
  {
    rocket: 'Falcon 9 Full Throttle',
    value: 1,
    type: 'Failure',
  },
  {
    rocket: 'Falcon 9 Heavy',
    value: 3,
    type: 'Failure',
  },
  {
    rocket: 'Falcon 1',
    value: 3,
    type: 'Success',
  },
  {
    rocket: 'Falcon 1e',
    value: 9,
    type: 'Success',
  },
  {
    rocket: 'Falcon 9 v1.1',
    value: 3.5,
    type: 'Success',
  },
  {
    rocket: 'Falcon 9 Full Throttle',
    value: 5,
    type: 'Success',
  },
  {
    rocket: 'Falcon 9 Heavy',
    value: 4.9,
    type: 'Success',
  },
];

const FailureRates: FC = () => {
  const config = {
    data,
    isStack: true,
    xField: 'rocket',
    yField: 'value',
    seriesField: 'type',
    color: ['#062c43', '#9ccddc'],
    label: {
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return <Column {...config} />;
};
export default FailureRates;
