export interface Item {
  name: string;
  link: string;
  step: string[];
}

export interface BarChartProps {
  data: {
    VLabel: string;
    subgraphTitle: string;
    dLabel: string;
    PLabel: string;
    graphTitle: string;
    legendAlign: 'start' | 'center' | 'end';
    legendPosition: 'top' | 'bottom' | 'left' | 'right';
    lineCurve: 'curved' | 'straight';
    pointSize: number;
    showXAxisGridLines: boolean;
    showYAxisGridLines: boolean;
    startYAxisFromZero: boolean;
    xAxis: string;
    yAxis: string;
  };
  type: string;
}
