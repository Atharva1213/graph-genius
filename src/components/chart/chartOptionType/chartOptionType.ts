import { BarChartProps } from '@/types/item';

export const updateBaseOption = ({
  baseOption,
  type,
  data,
}: {
  baseOption: any;
  type: string;
  data: BarChartProps['data'];
}) => {
  if (type === 'Bar Chart' || type === 'Scatter Chart') {
    (baseOption.plugins.legend = {
      align: data.legendAlign,
      position: data.legendPosition,
    }),
      (baseOption.elements = {
        point: {
          radius: data.pointSize,
        },
      }),
      (baseOption.scales = {
        x: {
          title: {
            display: true,
            text: data.xAxis,
          },
          grid: {
            display: data.showXAxisGridLines,
          },
        },
        y: {
          beginAtZero: data.startYAxisFromZero,
          title: {
            display: true,
            text: data.yAxis,
          },
          grid: {
            display: data.showYAxisGridLines,
          },
        },
      });
  } else if (type === 'Line Graph') {
    baseOption.elements = {
      line: {
        tension: data.lineCurve === 'curved' ? 1 : 0,
      },
    };
  }

  return baseOption;
};
