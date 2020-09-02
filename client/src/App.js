import React,{useState,useEffect} from 'react';
import {Layout,Image} from 'antd';
import 'antd/dist/antd.css';
import Profile from './components/Profile';
import Home from './components/Home';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

const { Content,Footer } = Layout

const App = () => {

  const dispatch = useDispatch()
  const value = useSelector(state => state.profileReducer.profileData)
  const [valor, setValor] = useState(null)

  useEffect(()=>{
    //console.log('value',value)
  },[])



  return (
    <BrowserRouter>
      <Layout style={{height:'100%',backgroundColor:'#111'}}>
          <Content style={{backgroundColor:'#111'}}>
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
