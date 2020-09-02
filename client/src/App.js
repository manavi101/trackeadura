import React,{useState,useEffect} from 'react';
import {Layout,Image} from 'antd';
import 'antd/dist/antd.css';
import Profile from './components/Profile';
import Home from './components/Home';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import { ThemeProvider ,createGlobalStyle} from 'styled-components';
import THEMES from './constants/themes';
import { getTheme } from './utils/getTheme';
import Background from './components/UI/themed-components/background';

const { Content,Footer } = Layout

const App = () => {

  const dispatch = useDispatch()
  const [themeName, setThemeName] = useState(THEMES.dark)
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background}
    color: ${props => props.theme.color}
  }
  `;

  return (
    <BrowserRouter>
      <ThemeProvider theme={getTheme(themeName)}>
        <Background>
            <>
              <GlobalStyle/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/:userId/:tagLine' component={Profile}/>
           </>
        </Background>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default App;

const styles = {
  backgroundImage:{
    backgroundImage:"url(" + "https://blitz-cdn.blitz.gg/blitz/val/AgentSilhouettes.png " + ")" ,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    //padding: '0 24px 24px' 
  }
}
