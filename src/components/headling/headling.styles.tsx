'use client';

import { Stack, styled } from '@mui/material';

export const Underline = styled(Stack)(({ theme }) => ({
  width: '150px',
  height: '4px',
  borderRadius: '10px',
  backgroundColor: 'rgb(37 99 235)',
  margin: 'auto',
  textAlign: 'center',
}));
