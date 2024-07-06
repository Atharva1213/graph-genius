const sameStepPie = [
  'Add a Title to your graph.',
  'Add a Sub-Title to your graph.',
  'Enter your data sets.',
  'Then enter the data labels separated by commas (,).',
  'Similarly, enter the data values of each data label separated by commas (,).',
  'Choice Legend Align and Legend Position.',
  'Click on Generate Graph button.',
];

const sameStepBar = [
  'Add a Title to your graph.',
  'Add a Sub-Title to your graph.',
  'Enter your data sets.',
  'Then enter the data labels separated by commas (,).',
  'Similarly, enter the data values of each data label separated by commas (,).',
  'Choice Legend Align and Legend Position.',
  'Click on Generate Graph button.',
];

export const items = [
  {
    name: 'Pie Chart',
    link: 'pieChart',
    step: sameStepPie,
  },
  {
    name: 'Scatter Chart',
    link: 'scatterChart',
    step: [
      'Add a Title to your graph.',
      'Add a Sub-Title to your graph.',
      'Add labels to your X and Y axis.',
      'Enter your data sets.',
      'Then enter the data labels separated by commas (,).',
      'Similarly, enter the data values of each data label separated by commas (,).',
      'Choice Line Point Size',
      'Click on Generate Graph button.',
    ],
  },
  {
    name: 'Doughnut Chart',
    link: 'doughnutChart',
    step: sameStepPie,
  },
  {
    name: 'Radar Chart',
    link: 'radarChart',
    step: sameStepBar,
  },
  {
    name: 'Bar Chart',
    link: 'barChart',
    step: sameStepBar,
  },
  {
    name: 'Line Graph',
    link: 'linegraph',
    step: [
      'Add a Title to your graph.',
      'Add a Sub-Title to your graph.',
      'Add labels to your X and Y axis.',
      'Enter your data sets.',
      'Then enter the data labels separated by commas (,).',
      'Similarly, enter the data values of each data label separated by commas (,).',
      'Choice Line Curve',
      'Click on Generate Graph button.',
    ],
  },
  {
    name: 'Polar Area Chart',
    link: 'polarAreaChart',
    step: sameStepBar,
  },
];
