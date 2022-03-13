import { Card, Checkbox, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Pie } from '@ant-design/plots';

type RocketProps = {
  rockets: Array<any>;
};

const RocketTypes: FC<RocketProps> = ({ rockets }) => {
  const [isChecked, setIsChecked] = useState({
    'v1.1': true,
    FT: true,
    'Merlin A': true,
    'v1.0': true,
    'Merlin C': true,
  });
  const [finalData, setFinalData] = useState([]);
  const rocketTypesArray = [];

  const filterRocketData = async () => {
    const dataA = [];
    const initArray = [];

    await Object.keys(isChecked)
      .filter((item) => {
        if (isChecked[item] === true) {
          return item;
        }
      })
      .map((x) => {
        const output = rockets.filter((rocket) => {
          if (rocket.rocket.rocket_type === x) {
            return rocket;
          }
        });

        initArray.push(...output);
      });
    if (initArray.length) {
      initArray.map((item) => {
        rocketTypesArray.push(item.rocket.rocket_type);
      });
      const rocketTypesObj = rocketTypesArray.reduce(
        // eslint-disable-next-line no-sequences
        (acc, curr) => (acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc), // counting occurrences of rocket type in array

        {}
      );

      for (const key in rocketTypesObj) {
        dataA.push({ type: key, value: rocketTypesObj[key] });
      }

      setFinalData(dataA);
    }
  };

  useEffect(() => {
    filterRocketData();
  }, [isChecked, rockets]);

  const { Option, OptGroup } = Select;
  const config = {
    appendPadding: 10,
    data: finalData,
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
        fontSize: 12,
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
      },
    },
  };
  return (
    <>
      <Card className="text-center">
        <Pie {...config} />
        <>
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
              {/* <Option>
                <Checkbox
                  checked={isChecked.v11}
                  onChange={() =>
                    setIsChecked({
                      ...isChecked,
                      v11: !isChecked.v11,
                    })
                  }
                >
                  v1.1
                </Checkbox>
              </Option>
              <Option>
                <Checkbox
                  checked={isChecked.FT}
                  onChange={() =>
                    setIsChecked({
                      ...isChecked,
                      FT: !isChecked.FT,
                    })
                  }
                >
                  FT
                </Checkbox>
              </Option>
              <Option>
                <Checkbox
                  checked={isChecked.MerlinA}
                  onChange={() =>
                    setIsChecked({
                      ...isChecked,
                      MerlinA: !isChecked.MerlinA,
                    })
                  }
                >
                  Merlin A
                </Checkbox>
              </Option>
              <Option>
                <Checkbox
                  checked={isChecked.v1}
                  onChange={() =>
                    setIsChecked({
                      ...isChecked,
                      v1: !isChecked.v1,
                    })
                  }
                >
                  v1.0
                </Checkbox>
              </Option>
              <Option>
                <Checkbox
                  checked={isChecked.MerlinC}
                  onChange={() =>
                    setIsChecked({
                      ...isChecked,
                      MerlinC: !isChecked.MerlinC,
                    })
                  }
                >
                  Merlin C
                </Checkbox>
              </Option> */}
            </OptGroup>
          </Select>
        </>
      </Card>
    </>
  );
};
export default RocketTypes;
