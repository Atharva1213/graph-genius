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
    legendAlign: string;
    legendPosition: string;
    lineCurve: string;
    pointSize: number;
    showXAxisGridLines: boolean;
    showYAxisGridLines: boolean;
    startYAxisFromZero: boolean;
    xAxis: string;
    yAxis: string;
  };
  type: string;
}


