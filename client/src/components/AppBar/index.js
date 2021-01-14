import React from 'react';
import clsx from 'clsx';
import {
  AppBar as MUIAppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Link,
  Hidden
} from '@material-ui/core';
import {
  Brightness7 as SunIcon,
  Brightness2 as MoonIcon
} from '@material-ui/icons';
import useStyles from './index.styles';
import { useHistory } from 'react-router-dom';
import  Searchbar  from './Searchbar/Searchbar';


const AppBar = props => {

  const {open, handleDrawerOpen, isDarkTheme, changeTheme} = props;
  
  const classes = useStyles();
  const history = useHistory();
  

  return(
    <div>
      <MUIAppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} color={"primary"}>
        <Toolbar className={classes.toolbar}>
          <Hidden xsDown>
            <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
              <Link underline="none" href="/"  className={classes.link}>
                TRACKEADURA
              </Link>
            </Typography>
          </Hidden>
          <Searchbar/>
          <Hidden smUp>
            <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
              <Link underline="none" href="/"  className={classes.link}>
                T
              </Link>
            </Typography>
          </Hidden>

          <IconButton onClick={changeTheme}>
            {isDarkTheme ? <SunIcon/> : <MoonIcon/>}
          </IconButton>
        </Toolbar>
      </MUIAppBar>
    </div>
  )
}

export default AppBar;
