import React,{useState,useEffect} from 'react';
import {
  Layout,
  Image,
  Col,
  Row
} from 'antd';
import 'antd/dist/antd.css';
import Header from './components/Header';
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
      <Row align="middle" justify="center">
        <Col span={24} style={{backgroundColor:'#111'}}>
            <Route path={'/'} component={Header}/>
            <Content style={{padding: 24,backgroundColor:'#111'}}>
              <Route exact path='/' component={Home}/>
              <Route exact path='/:userId/:tagLine' component={Profile}/>
            </Content>
        </Col>
      </Row>
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
