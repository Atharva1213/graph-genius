import { Colors } from '@/types/common';
import { BarChartProps } from '@/types/item';
import { updateBaseOption } from '@/components/chart/chartOptionType/chartOptionType';

const chartOption = ({ data, type }: BarChartProps) => {
  const labels: string[] = data.dLabel.split(',');
  const values: number[] = data.VLabel.split(',').map(Number);
  const backgroundColors: string[] = Colors.slice(0, labels.length);
  const Basechart = {
    labels: labels,
    datasets: [
      {
        label: data.graphTitle,
        data: values,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) => color.replace('0.2', '1')),
        borderWidth: 1,
      },
    ],
  };
  const BasechartOptions = {
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

  const updatedOptions = updateBaseOption({ baseOption: BasechartOptions, type, data });
  return { Basechart, updatedOptions };
};

export default chartOption;
