import { Card, Checkbox, Select } from 'antd';
import { FC } from 'react';
import { Pie } from '@ant-design/plots';

type RocketProps = {
  rockets: Array<any>;
};

const RocketTypes: FC<RocketProps> = ({ rockets }) => {
  const temArr = [];
  rockets.map((item) => {
    temArr.push(item.rocket.rocket_type);
  });
  const rocketTypesObj = temArr.reduce(
    // eslint-disable-next-line no-sequences
    (acc, curr) => (acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc),
    {}
  );

  const data = [];
  for (const key in rocketTypesObj) {
    data.push({ type: key, value: rocketTypesObj[key] });
  }

  // eslint-disable-next-line no-console
  console.log('RTO', data);

  const { Option, OptGroup } = Select;
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    color: ['#062c43', '#054569', '#5591a9', '#9ccddc', '#ced7e0'],
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: true,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Rocket\nTypes',
      },
    },
  };
  return (
    <>
      <Card className="text-center">
        <Pie {...config} />
        <>
          <Select placeholder="Select Rocket Types" style={{ width: 180 }}>
            <OptGroup label="Rocket Types">
              <Option value="Falcon 1">
                <Checkbox>v1.1</Checkbox>
              </Option>
              <Option value="Falcon 1e">
                <Checkbox>FT</Checkbox>
              </Option>
              <Option value="Falcon 1e">
                <Checkbox>Merlin A</Checkbox>
              </Option>
              <Option value="Falcon 9 v1.1">
                <Checkbox>v1.0</Checkbox>
              </Option>
              <Option value="Falcon 9 Full Thrust">
                <Checkbox>Merlin C</Checkbox>
              </Option>
            </OptGroup>
          </Select>
        </>
      </Card>
    </>
  );
};
export default RocketTypes;
