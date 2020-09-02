import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import Profile from './components/Profile';
import Home from './components/Home';
import Weapons from './components/Weapons';
import {useDispatch,useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

const Routes = () => {

  return (
    <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route exact path='/profile/:userId/:tagLine' component={Profile}/>
            <Route exact path='/Weapons' component={Weapons}/>
    </BrowserRouter>
  );
}

export default Routes;

