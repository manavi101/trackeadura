import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";

const DatePicker = props => {

  const { name, label, value, onChange } = props;

  const convertToDefaultEventParams = (name, value) => ({
    target:{
      name,value
    }
  })

  return(
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <KeyboardDatePicker variant="inline" inputVariant="outlined"
        label={label}
        format="dd/MM/yyyy"
        name={name}
        value={value}
        onChange={date => onChange(convertToDefaultEventParams(name, date))}
      >
      </KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;