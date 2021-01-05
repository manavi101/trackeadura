import React from 'react';
import { Button as MUIButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
    margin: theme.spacing(0.5)
  },
  label:{
    textTransform: 'none'
  },
  btnText:{
    fontWeight:'bold'
  },
}))

const Button = props => {


  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles()

  return(
    <MUIButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{root:classes.root, label:classes.label}}
    >
      <Typography variant="button" className={classes.btnText}>{text}</Typography>
    </MUIButton>
  );
}

export default Button;