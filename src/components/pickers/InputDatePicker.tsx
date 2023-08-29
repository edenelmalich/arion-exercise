import { FC, useState } from 'react';

// Third party
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Moment } from 'moment';

// Types
import { TInputDatePicker } from './type';

const InputDatePicker: FC<TInputDatePicker> = ({
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const handleChange = (date: Moment | null) => {
    onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        onChange={handleChange}
        open={open}
        format="MMMM Do YYYY"
        onClose={() => setOpen(false)}
        slotProps={{
          textField: {
            onClick: () => setOpen(true),
            fullWidth: true,
            size: 'small',
          },
        }}
      />
    </LocalizationProvider>
  );
};

export {
  InputDatePicker,
};
