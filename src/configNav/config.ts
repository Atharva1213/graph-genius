import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'Pie Chart', title: 'Pie Chart', href: paths.pieChart, icon: 'chart-pie' },
  { key: 'Bar Chart', title: 'Bar Chart', href: paths.barChart, icon: 'Bar-pie' },
  { key: 'Radar Chart', title: 'Radar Chart', href: paths.radarChart, icon: 'Radar-pie' },
  { key: 'Doughtnut Chart', title: 'Doughtnut Chart', href: paths.doughoutChart, icon: 'Doughtnut-pie' },
  { key: 'Scatter Chart', title: 'Scatter Chart', href: paths.scatterChart, icon: 'Scatter-pie' },
  { key: 'Line Graph', title: 'Line Graph', href: paths.lineGraph, icon: 'Line-pie' },
  { key: 'Polar Area Chart', title: 'Polar Area Chart', href: paths.polarAreaChart, icon: 'polar-pie' },
] satisfies NavItemConfig[];
