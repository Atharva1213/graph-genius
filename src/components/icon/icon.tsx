import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartBar as ChartBarIcon } from '@phosphor-icons/react/dist/ssr/ChartBar';
import { ChartDonut as ChartDonutIcon } from '@phosphor-icons/react/dist/ssr/ChartDonut';
import { ChartLine as ChartLineIcon } from '@phosphor-icons/react/dist/ssr/ChartLine';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { ChartPolar as ChartPolarIcon } from '@phosphor-icons/react/dist/ssr/ChartPolar';
import { ChartScatter as ChartScatterIcon } from '@phosphor-icons/react/dist/ssr/ChartScatter';
import { Target as RaderIcon } from '@phosphor-icons/react/dist/ssr/Target';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'Bar-pie': ChartBarIcon,
  'Radar-pie': RaderIcon,
  'Scatter-pie': ChartScatterIcon,
  'Doughtnut-pie': ChartDonutIcon,
  'Line-pie': ChartLineIcon,
  'polar-pie': ChartPolarIcon,
} as Record<string, Icon>;
