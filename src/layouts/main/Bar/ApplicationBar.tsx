import { useContext } from 'react';

// Third party
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Moment } from 'moment';

// Components
import { InputDatePicker } from '../../../components/pickers';
import { CommonContext } from '../../../context/CommonContext';

// helpers
import { BASE_COLORS } from '../../../utils/helpers/theme.helper';

const ApplicationBar = () => {
  const { setRenderImageOption } = useContext(CommonContext);
  const handlePickerChange = async (val: Moment | null) => {
    setRenderImageOption(val?.format() || 'default');

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppBar
      elevation={1}
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: BASE_COLORS.bgcolor,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
      }}
    >
      <Toolbar>
        <Typography fontWeight={600} fontSize={20}>Images</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <InputDatePicker onChange={handlePickerChange} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export {
  ApplicationBar,
};
