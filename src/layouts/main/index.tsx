import { FC, ReactNode, Suspense } from 'react';

// Third party
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { Loader } from '../../components/Loader';
import { ApplicationBar } from './Bar';

type TMainStyled = {
  children: ReactNode
};

const MainStyled = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(() => ({
  width: '100%',
  minHeight: 'calc(100vh - 88px)',
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout: FC<TMainStyled> = ({ children }) => (
  <Box>
    <ApplicationBar />
    <MainStyled>
      <Toolbar />
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </MainStyled>
  </Box>
);

export {
  MainLayout,
};
