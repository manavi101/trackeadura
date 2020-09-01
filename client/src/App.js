import React,{useState,useEffect} from 'react';
import {Layout,Image} from 'antd';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Home from './components/Home';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

const { Content } = Layout

const App = () => {

  const dispatch = useDispatch()
  const value = useSelector(state => state.profileReducer.profileData)
  const [valor, setValor] = useState(null)

  useEffect(()=>{
    const pene = async () => {
      await fetch("https://valorant.iesdev.com/match/fc0f645d-91e7-41bf-b1ba-d41eb82183db", {
      "credentials": "omit",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3"
      },
      "referrer": "https://blitz.gg/valorant/match/parradura-las/fc0f645d-91e7-41bf-b1ba-d41eb82183db",
      "method": "GET",
      "mode": "cors"
  });
    }
    pene()
    //console.log('value',value)
  },[])



  return (
    <BrowserRouter>
      <Layout className="site-layout-background"
         style={{
          margin: 0,
          minHeight: 280,
          //height:'100vh',
          backgroundColor:'#111'
        }}>
          <Route path={'/'} component={Header}/>
          <Content style={{padding: 24,backgroundColor:'#111'}}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/:userId/:tagLine' component={Profile}/>
          </Content>
      </Layout>
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
