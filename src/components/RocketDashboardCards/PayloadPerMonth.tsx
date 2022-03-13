import { Line } from '@ant-design/plots';
import { FC } from 'react';
import { GetLaunchesQuery } from '../../generated/graphql';
import { monthDifference } from '../../helperFunctions';
import { MonthsPayloadDataType } from '../../types';

type PayloadProps = {
  payloads: GetLaunchesQuery['launchesPast'];
};
const PayloadPerMonth: FC<PayloadProps> = ({ payloads }) => {
  // For this component, I have opted to look at the 12 month period before 2020.11.2021, as the provided SpaceX API has not been updated in the past 12 months.

  const dateArray: GetLaunchesQuery['launchesPast'] | [] = payloads?.filter(
    (item, i) => {
      return (
        i !== 0 &&
        monthDifference(
          // finding last 12 months
          new Date(item?.launch_date_local),
          new Date('2020-11-21T09:17:00-08:00')
        ) < 13
      );
    }
  );
  const constructArr: MonthsPayloadDataType[] = [];
  let payloadAmount = 0;
  dateArray?.map((item, i) => {
    if (
      item?.rocket?.second_stage?.payloads?.length &&
      item?.rocket?.second_stage?.payloads[0]?.payload_mass_kg
    ) {
      if (
        monthDifference(
          new Date(dateArray[i - 1]?.launch_date_local),
          new Date(item?.launch_date_local)
        ) === -1
      ) {
        constructArr.push({
          month: (item?.launch_date_local as string).slice(0, 7),
          value: payloadAmount,
        });

        payloadAmount =
          item?.rocket?.second_stage?.payloads[0]?.payload_mass_kg;
      } else {
        payloadAmount =
          payloadAmount +
          item?.rocket?.second_stage?.payloads[0]?.payload_mass_kg;
      }
    }
  });
  const data = constructArr;

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    xAxis: {
      type: 'timeCat',
      tickCount: 12,
    },
  };

  return <Line {...config} />;
};
export default PayloadPerMonth;
