import { Moment } from 'moment';

export type TInputDatePicker = {
  onChange: (date: Moment | null) => void;
};
