import React from 'react';
import { Stack, Typography } from '@mui/material';

import { Underline } from './headling.styles';

export default function headling({ title, size }: { title: string; size: string }) {
  return (
    <Stack gap={1}>
      {size === 'h3' ?
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          {title}
        </Typography> : <Typography variant="h5" sx={{ textAlign: 'center' }}>
          {title}
        </Typography>
      }
      <Underline />
    </Stack>
  );
}
