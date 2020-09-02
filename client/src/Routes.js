import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import Profile from './components/Profile';
import Home from './components/Home';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

const App = () => {

  const dispatch = useDispatch()
  const value = useSelector(state => state.profileReducer.profileData)
  const [valor, setValor] = useState(null)

  useEffect(()=>{
    //console.log('value',value)
  },[])



  return (
    <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route exact path='/profile/:userId/:tagLine' component={Profile}/>
    </BrowserRouter>
  );
}

export default App;

