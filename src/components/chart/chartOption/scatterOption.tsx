import { parseStringToData } from '@/types/common';
import { BarChartProps } from '@/types/item';

import { updateBaseOption } from '../chartOptionType/chartOptionType';

const scatterOption = ({ data, type }: BarChartProps) => {
  const parsedData = parseStringToData(data.PLabel);
  const BaseScatterchart = {
    datasets: [
      {
        label: data.graphTitle,
        data: parsedData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const BasechartScatterOptions = {
    plugins: {
      title: {
        display: true,
        text: data.graphTitle,
      },
      subtitle: {
        display: true,
        text: data.subgraphTitle,
        color: 'blue',
        font: {
          size: 12,
          family: 'tahoma',
          weight: 'normal',
          style: 'italic',
        },
        padding: {
          bottom: 10,
        },
      },
    },
  };
  const updatedScatterOptions = updateBaseOption({ baseOption: BasechartScatterOptions, type, data });
  return { BaseScatterchart, updatedScatterOptions };
};

export default scatterOption;
