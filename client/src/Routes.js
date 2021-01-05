import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Paper,
} from '@material-ui/core';
import {Route,Switch} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from './routeStyles';
import { darkTheme, lightTheme } from './themes';


//PAGES
import Home from './pages/Home';
import Profile from './pages/Profile';

//UI
import Appbar from './components/AppBar';
import Error from './components/Error.js';


const Routes = props => {

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false)

  const changeTheme = () => {
    setDarkTheme(!isDarkTheme)
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return(
    <ThemeProvider theme={ isDarkTheme ? darkTheme : lightTheme }>
    <CssBaseline />
    {/* <Paper className={classes.root}> */}
      <Appbar open={open} handleDrawerOpen={handleDrawerOpen} isDarkTheme={isDarkTheme} changeTheme={changeTheme}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/profile/:user' component={Profile}/>
              <Route component={()=> <Error errorCode="404"/>}/>
            </Switch>
      </main>
    {/* </Paper> */}
  </ThemeProvider>
  )
}

export default Routes;