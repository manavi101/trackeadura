import React from 'react';
import clsx from 'clsx';
import {
  AppBar as MUIAppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Link
} from '@material-ui/core';
import {
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  Brightness7 as SunIcon,
  Brightness2 as MoonIcon
} from '@material-ui/icons';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';


const AppBar = props => {

  const {open, handleDrawerOpen, isDarkTheme, changeTheme} = props;
  
  const classes = useStyles();
  const history = useHistory();
  

  return(
    <div>
      <MUIAppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} color={"primary"}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
            <Link underline="none" href="/" >
              TRACKEADURA
            </Link>
          </Typography>
          <IconButton onClick={changeTheme}>
            {isDarkTheme ? <SunIcon/> : <MoonIcon/>}
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon color="primary"/>
            </Badge>
          </IconButton>
        </Toolbar>
      </MUIAppBar>
    </div>
  )
}

export default AppBar;
