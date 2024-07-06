import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

export const Colors = [
  '#2196F3',
  '#4CAF50',
  '#FFC107',
  '#FF9800',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#00BCD4',
  '#009688',
];

export const defaultValues = {
  graphTitle: 'Sample Graph',
  subgraphTitle: 'sub Title',
  xAxis: 'X-Axis',
  yAxis: 'Y-Axis',
  dLabel: 'a,b,c,d',
  VLabel: '10,4,40,50',
  PLabel: '(2,3),(1,3)',
  pointSize: 4,
  legendPosition: 'top',
  legendAlign: 'center',
  lineCurve: 'straight',
  startYAxisFromZero: true,
  showXAxisGridLines: false,
  showYAxisGridLines: true,
};

export const parseStringToData = (dataString: string) => {
  const points = dataString.split('),(');
  const data = points.map((point) => {
    const [xStr, yStr] = point.replace(/[()]/g, '').split(',');
    const x = parseFloat(xStr.trim());
    const y = parseFloat(yStr.trim());
    return { x, y };
  });
  return data;
};

export const downloadChart = (chartRef: any, extension: string) => {
  html2canvas(chartRef.current).then((canvas) => {  
    canvas.toBlob((blob) => {
      if (extension === 'png') saveAs(blob  || "", 'chart.png');
      else saveAs(blob ||  "", 'chart.jpg');
    });
  });
};
