import React,{useContext,useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col,Layout} from 'antd';
import {ThemeContext} from 'styled-components';
import StyledCol from '../UI/themed-components/col';
import WeaponsCategories from './categories.js';
import styles from './Weapons.module.css';
import {setweaponsData} from '../../actions/index';
import Loading from '../UI/themed-components/Loading';
import WeaponsBox from './weaponsBox';


  const Weapons = (props) => {

    const themeContext = useContext(ThemeContext)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const WeaponsData = useSelector(state => state.weaponsReducer.weaponsData);
    const dispatch = useDispatch()
  
    useEffect(() => {
      fetch("/api/Weapons")
        .then(res => res.json())
        .then(
          (result) => {
            dispatch(setweaponsData(result))
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            console.log(error)
          }
        )
    }, [])
    
    if (error) {
    return <div>Error fatal</div>;
    } else if (isLoaded) {
        return (
          <Layout style={{backgroundColor:themeContext.backgroundColor}}>
            <WeaponsCategories params={props.match.params}/>
            <WeaponsBox params={props.match.params}/>
          </Layout>
        );
    } else {
        return <Loading/>;
    }
}


export default Weapons;