import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';

import { BarChartProps } from '@/types/item';
import chartOption from '@/components/chart/chartOption/chartOption';

import scatterOption from '../chartOption/scatterOption';

const chartType = ({ data, type }: BarChartProps) => {
  const { Basechart, updatedOptions } = chartOption({ data, type });
  let finalChart;

  switch (type) {
    case 'Pie Chart':
      finalChart = <Pie data={Basechart} options={updatedOptions} />;
      break;
    case 'Bar Chart':
      finalChart = <Bar data={Basechart} options={updatedOptions} />;
      break;
    case 'Radar Chart':
      finalChart = <Radar data={Basechart} options={updatedOptions} />;
      break;
    case 'Scatter Chart':
      {
        const { BaseScatterchart, updatedScatterOptions } = scatterOption({ data, type });
        finalChart = <Scatter data={BaseScatterchart} options={updatedScatterOptions} />;
      }
      break;
    case 'Line Graph':
      finalChart = <Line data={Basechart} options={updatedOptions} />;
      break;
    case 'Doughnut Chart':
      finalChart = <Doughnut data={Basechart} options={updatedOptions} />;
      break;
    case 'Polar Area Chart':
      finalChart = <PolarArea data={Basechart} options={updatedOptions} />;
      break;
    default:
      finalChart = null;
  }

  return finalChart;
};

export default chartType;
