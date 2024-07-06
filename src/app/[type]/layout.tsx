import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';

import { SideNav } from '@/components/sidebar/sideNav';
import { MainNav } from '@/components/topBar/topBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': '1000',
            '--SideNav-width': '280px',
            '--SideNav-zIndex': '1100',
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': '1100',
          },
        }}
      />
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            pl: { lg: 'var(--SideNav-width)', height: '100vh' },
          }}
        >
          <MainNav />
          <Box sx={{ flex: 1, overflowY: 'auto', bgcolor: 'background.paper', p: 2 }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
}
