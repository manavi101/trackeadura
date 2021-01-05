import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup as MUIRadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';

const RadioGroup = props => {

  const { label, name, value, onChange, items} = props;

  return(
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MUIRadioGroup row
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map(e => (
           <FormControlLabel key={e.value} value={e.value} control={<Radio/>} label={e.label}/>
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;