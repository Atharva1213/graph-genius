import * as React from 'react';
import RouterLink from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ErrorPage() {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100%',
        }}
      >
        <Stack spacing={3} sx={{ alignItems: 'center', maxWidth: 'md' }}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            This Page is Not Found
          </Typography>
          <Button component={RouterLink} href="/" startIcon={<ArrowBackIcon />} variant="contained">
            Go Back To Home Page
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
