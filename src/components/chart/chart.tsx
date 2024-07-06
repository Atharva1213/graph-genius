import React from 'react';
import { Chart, registerables } from 'chart.js';

import { BarChartProps } from '@/types/item';
import { ChartDiv } from '@/components/formBuilder/formBuilder.styles';

import chartType from './chartType/chartType';

Chart.register(...registerables);

const ChartBar: React.FC<BarChartProps> = ({ data, type }) => {
  const finalChart = chartType({ data, type });
  return <ChartDiv>{finalChart}</ChartDiv>;
};

export default ChartBar;
