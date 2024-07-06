'use client';

import { Box, Button, Container, FormControlLabel, Input, InputLabel, Select, styled } from '@mui/material';

export const InputContainer = styled(Input)(({ theme }) => ({
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '8px',
  color: '#22326e',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  '&:focus, &:focus-within': {
    borderColor: 'rgb(37 99 235)',
    boxShadow: `0 0 3px rgba(37, 99, 235, 0.5)`,
    outline: 'none',
  },
  '&::placeholder': {
    color: '#999',
  },
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

export const BoxMin = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
}));

export const InputLabelField = styled(InputLabel)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
}));

export const NormalBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

export const FormBuilderContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('xs')]: {
    gap: '30px',
  },
}));

export const ControlLabel = styled(FormControlLabel)(({ theme }) => ({}));

export const DownloadButton = styled(Button)(({ theme }) => ({
  width: '200px',
  margin: 'auto',
  [theme.breakpoints.up('lg')]: {
    width: '250px',
  },
}));

export const SelectOption = styled(Select)(({ theme }) => ({
  width: '100%',
}));

export const ChartDiv = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '450px',
  margin: '5px',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: '10px',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  alignItems: 'center',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
}));
