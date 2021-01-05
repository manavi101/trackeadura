import React from 'react';
import { 
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  FormHelperText
} from '@material-ui/core';

const Select = props => {

  const { name, label, value, error=null, onChange, options } = props;

  return(
    <FormControl variant="outlined" 
    {...(error && {error:true, helperText:error})}
    >
      <InputLabel>{label}</InputLabel>
      <MUISelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">Ninguna</MenuItem>
        {
          options.map(
            item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
          )
        }
      </MUISelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}

export default Select;