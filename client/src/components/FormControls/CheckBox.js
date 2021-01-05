import React from 'react';
import { FormControl, FormControlLabel, Checkbox as MUICheckBox } from '@material-ui/core';

const CheckBox = props => {

  const { name, label, value, onChange } = props;

  const convertToDefaultEventParams = (name, value) => ({
    target:{
      name,value
    }
  })

  return(
    <FormControl>
      <FormControlLabel
        control={<MUICheckBox
          name={name}
          color="primary"
          checked={value}
          onChange={e => onChange(convertToDefaultEventParams(name, e.target.checked))}
        />}
        label={label}
      />
    </FormControl>
  );
}


export default CheckBox;