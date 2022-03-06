import { Card, Checkbox, Select } from 'antd';
import { FC } from 'react';
import { Pie } from '@ant-design/plots';

const RocketTypes: FC = () => {
  const { Option, OptGroup } = Select;

  const data = [
    {
      type: 'Falcon 1',
      value: 27,
    },
    {
      type: 'Falcon 1e',
      value: 25,
    },
    {
      type: 'Falcon 9 v1.1',
      value: 18,
    },
    {
      type: 'Falcon 9 Full Thrust',
      value: 15,
    },
    {
      type: 'Falcon Heavy',
      value: 10,
    },
  ];
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
      title: false,
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
      <Card className="justify-center">
        <Pie {...config} />
        <>
          <Select placeholder="Select Rocket Types" style={{ width: 180 }}>
            <OptGroup label="Rocket Types">
              <Option value="Falcon 1">
                <Checkbox>Falcon 1</Checkbox>
              </Option>
              <Option value="Falcon 1e">
                <Checkbox>Falcon 1e</Checkbox>
              </Option>
              <Option value="Falcon 1e">
                <Checkbox>Falcon 1e</Checkbox>
              </Option>
              <Option value="Falcon 9 v1.1">
                <Checkbox>Falcon 9 v1.1</Checkbox>
              </Option>
              <Option value="Falcon 9 Full Thrust">
                <Checkbox>Falcon 9 Full Thrust</Checkbox>
              </Option>
              <Option value="Falcon Heavy">
                <Checkbox>Falcon Heavy</Checkbox>
              </Option>
            </OptGroup>
          </Select>
        </>
      </Card>
    </>
  );
};
export default RocketTypes;
