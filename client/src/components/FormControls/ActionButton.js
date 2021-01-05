import React from 'react';
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root:{
    minWidth:0,
    margin: theme.spacing(0.5)
  },
  secondary:{
    backgroundColor:theme.palette.secondary.main,
    '& .MuiButton-label':{
      color: theme.palette.common.white
    }
  },
  primary:{
    backgroundColor:theme.palette.primary.main,
    '& .MuiButton-label':{
      color: theme.palette.common.white
    }
  }
}))

const ActionButton = props => {

  const { color, children, onClick } = props;
  const classes = useStyles();

  return(
    <Button
    onClick={onClick}
    className={`${classes.root} ${classes[color]}`}
    >
      {children}
    </Button>
  )
}

export default ActionButton;