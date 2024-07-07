import React from 'react';
import { Chart, registerables } from 'chart.js';
import { BarChartProps } from '@/types/item';
import { ChartDiv,ChartDivInside} from '@/components/formBuilder/formBuilder.styles';
import chartType from './chartType/chartType';

Chart.register(...registerables);

interface ChartBarProps extends BarChartProps {
  chartRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ChartBar: React.FC<ChartBarProps> = ({ data, type, chartRef }) => {
  const finalChart = chartType({ data, type });

  return (
    <ChartDiv> 
       <ChartDivInside ref={chartRef}  >
       {finalChart}
       </ChartDivInside>
    </ChartDiv>
  );
};

export default ChartBar;
