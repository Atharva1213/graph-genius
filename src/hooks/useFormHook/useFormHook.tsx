import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { defaultValues } from '@/types/common';

const schema = z.object({
  graphTitle: z.string().nonempty('Graph Title is Required'),
  subgraphTitle: z.string().nonempty('Graph Sub-Title is Required'),
  xAxis: z.string().nonempty('Horizontal Axis Label is Required'),
  yAxis: z.string().nonempty('Vertical Axis Label is Required'),
  PLabel: z.string().nonempty('Data Values are required'),
  dLabel: z.string().nonempty('Data Labels are required'),
  VLabel: z.string().nonempty('Data Values are required'),
  pointSize: z.number(),
  legendPosition: z.string(),
  legendAlign: z.string(),
  lineCurve: z.string(),
  startYAxisFromZero: z.boolean(),
  showXAxisGridLines: z.boolean(),
  showYAxisGridLines: z.boolean(),
});

export default function useFormHook() {
  const [graphData, setGraphData] = useState<z.infer<typeof schema>>(defaultValues);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmitForm = (data: z.infer<typeof schema>) => {
    setGraphData(data);
  };

  return { register, handleSubmit, onSubmitForm, errors, graphData };
}
