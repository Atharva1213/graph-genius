'use client';

import { Container, styled } from '@mui/material';

export const MainContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  padding: '2rem',
  gap: '3rem',
  flexDirection: 'column',
  [theme.breakpoints.up('xs')]: {
    padding: '0.5rem',
  },
}));
