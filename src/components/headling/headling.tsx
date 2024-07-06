import React from 'react';
import { Stack, Typography } from '@mui/material';

import { Underline } from './headling.styles';

export default function headling({ title, size }: { title: string; size: string }) {
  return (
    <Stack gap={1}>
      <Typography variant={size} component={size} sx={{ textAlign: 'center' }}>
        {title}
      </Typography>
      <Underline />
    </Stack>
  );
}
