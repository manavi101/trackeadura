import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import {useDispatch,useSelector} from 'react-redux';
import {Route,withRouter} from 'react-router-dom';
import { ThemeProvider ,createGlobalStyle} from 'styled-components';
import THEMES from './constants/themes';
import { getTheme } from './utils/getTheme';
import Background from './components/UI/themed-components/background';

//SCREENS
import Profile from './components/Profile';
import Home from './components/Home';
import Header from './components/Header';
import Weapons from './components/Weapons';
import Canvas from './components/Canvas';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background}
    color: ${props => props.theme.color}
  }
  `;

const Routes = ({location}) => {
  const [themeName, setThemeName] = useState(THEMES.dark)

  const changeTheme = () => {
    setThemeName(themeName == THEMES.dark ? THEMES.light : THEMES.dark)
  }
  console.log(themeName)
  const exludeHeaderPath = ['/']

  return (
     <ThemeProvider theme={getTheme(themeName)}>
        <Background>
          {exludeHeaderPath.indexOf(location.pathname) < 0 && <Header themes={themeName} changeTheme={changeTheme}/>}
          <GlobalStyle/>
          <Route exact path='/' component={Home}  />
          <Route exact path='/profile/:userId/:tagLine' component={Profile} setShowHeader={true}/>
          <Route exact path='/Weapons' component={Weapons} setShowHeader={true}/>
          <Route exact path='/canvas' component={Canvas} setShowHeader={true}/>
        </Background>
      </ThemeProvider>   
  );
}

export default withRouter(Routes);

