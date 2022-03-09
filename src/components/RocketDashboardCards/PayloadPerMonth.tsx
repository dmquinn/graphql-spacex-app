import { Line } from '@ant-design/plots';
import { FC } from 'react';
import { monthDifference } from '../../helperFunctions';

type PayloadProps = {
  payloads: any;
};
const PayloadPerMonth: FC<PayloadProps> = ({ payloads }) => {
  // const today = new Date();

  const dateArray = payloads.filter((item) => {
    return (
      monthDifference(
        // finding last 12 months
        new Date(item.launch_date_local),
        new Date('2020-11-21T09:17:00-08:00')
      ) < 13
    );
  });
  const constructArr: any[] = [];
  let payloadAmount = 0;
  dateArray.map((item, i) => {
    if (
      monthDifference(
        new Date(dateArray[i - 1]?.launch_date_local),
        new Date(item.launch_date_local)
      ) === -1
    ) {
      constructArr.push({
        month: item.launch_date_local.slice(0, 7), // slice tidying date format
        value: payloadAmount,
      });
      payloadAmount = item.rocket.second_stage.payloads[0].payload_mass_kg;
    } else {
      payloadAmount =
        payloadAmount + item.rocket.second_stage.payloads[0].payload_mass_kg;
    }
  });
  // eslint-disable-next-line no-console
  const data = constructArr;
  // eslint-disable-next-line no-console
  console.log(payloads, 'dates', dateArray);
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};
export default PayloadPerMonth;
