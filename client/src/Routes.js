import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import Profile from './components/Profile';
import Home from './components/Home';
import Weapons from './components/Weapons';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import { ThemeProvider ,createGlobalStyle} from 'styled-components';
import THEMES from './constants/themes';
import { getTheme } from './utils/getTheme';
import Background from './components/UI/themed-components/background';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background}
    color: ${props => props.theme.color}
  }
  `;

const Routes = () => {

  const [themeName, setThemeName] = useState(THEMES.dark)
  
  return (
    <BrowserRouter>
     <ThemeProvider theme={getTheme(themeName)}>
        <Background>
            <>
              <GlobalStyle/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/profile/:userId/:tagLine' component={Profile}/>
              <Route exact path='/Weapons' component={Weapons}/>
           </>
        </Background>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default Routes;

