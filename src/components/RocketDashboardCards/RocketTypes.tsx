import { Card, Checkbox, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Pie } from '@ant-design/plots';
import { CheckedType, DisplayDataType } from '../../types';
import { GetLaunchesQuery } from '../../generated/graphql';

type RocketProps = {
  rockets: GetLaunchesQuery['launches'];
};
export interface IRocketTypesObject {
  item: number;
  num: number;
}
const RocketTypes: FC<RocketProps> = ({ rockets }) => {
  const [isChecked, setIsChecked] = useState<CheckedType>({
    'v1.1': true,
    FT: true,
    'Merlin A': true,
    'v1.0': true,
    'Merlin C': true,
  });
  const [displayData, setDisplayData] = useState<DisplayDataType[]>([]);
  const rocketTypesArray: string[] = [];

  const filterRocketData = async () => {
    const dataA = [];
    const initArray: GetLaunchesQuery['launches'] = []; // unsure of type

    Object.keys(isChecked)
      .filter((item) => {
        if (isChecked[item] === true) {
          return item;
        }
      })
      .map((x) => {
        const output: GetLaunchesQuery['launches'] = rockets?.filter((item) => {
          if (item?.rocket?.rocket_type === x) {
            return item;
          }
        });

        output?.length && initArray.push(...output);
      });
    if (initArray.length) {
      initArray.map((item) => {
        if (item?.rocket?.rocket_type) {
          rocketTypesArray.push(item?.rocket?.rocket_type);
        }
      });
      // counting occurrences of rocket type in array
      const rocketTypesObj: { [key: string]: number } = rocketTypesArray.reduce(
        (item, num) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-sequences
          item[num] ? ++item[num] : (item[num] = 1), item
        ),
        {}
      );

      for (const key in rocketTypesObj) {
        dataA.push({ type: key, value: rocketTypesObj[key] });
      }

      setDisplayData(dataA);
    }
  };

  useEffect(() => {
    filterRocketData();
  }, [isChecked, rockets]);

  const { Option, OptGroup } = Select;
  const configRocketTypes = {
    appendPadding: 10,
    data: displayData,
    angleField: 'value',
    color: ['#062c43', '#054569', '#5591a9', '#9ccddc', '#ced7e0'],
    colorField: 'type',
    radius: 1,
    innerRadius: 0.5,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 10,
      },
    },
    legend: {
      selected: isChecked,
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
        content: '',
      },
    },
  };
  return (
    <Card className="text-center">
      <Pie {...configRocketTypes} />
      <Select placeholder="Select Rocket Types" style={{ width: 180 }}>
        <OptGroup>
          {Object.keys(isChecked).map((item) => {
            return (
              <Option key={item} value={item}>
                <Checkbox
                  checked={isChecked[item]}
                  onChange={() =>
                    setIsChecked({
                      ...isChecked,
                      [item]: !isChecked[item],
                    })
                  }
                >
                  {item}
                </Checkbox>
              </Option>
            );
          })}
        </OptGroup>
      </Select>
    </Card>
  );
};
export default RocketTypes;
