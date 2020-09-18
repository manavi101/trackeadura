import React,{useContext,useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col,Layout} from 'antd';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {ThemeContext} from 'styled-components';
import StyledCol from '../UI/themed-components/col';
import StyledButtonText from '../UI/themed-components/ButtonText';
import WeaponsCategories from './categories.js';
import styles from './Weapons.module.css';
import {setweaponsData} from '../../actions/index';


  const Weapons = () => {

    const themeContext = useContext(ThemeContext)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const WeaponsData = useSelector(state => state.weaponsReducer.weaponsData);
    const dispatch = useDispatch()
    
    const carousel = {
        mouseTrackingEnabled: true,
        buttonsDisabled: true,
        dotsDisabled:true,
        infinite:true,
        responsive:{
            0: {
                items: 1,
            },
            768: {
                items: 5
            }
        },
        stagePadding:{
            paddingLeft: 100,     
            paddingRight: 100
        }
    }
  
    useEffect(() => {
      fetch("api/Weapons")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            dispatch(setweaponsData(result))
          },
          (error) => {
            setIsLoaded(true);
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
                <WeaponsCategories/>
                <Row className="" style={{paddingTop:"10px"}}>
                    <Col xs={24} className="">
                        <AliceCarousel {...carousel}>
                            <StyledCol style={{borderRadius:"15px",marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></StyledCol>
                            <StyledCol style={{borderRadius:"15px",marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></StyledCol>
                            <StyledCol style={{borderRadius:"15px",marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></StyledCol>
                            <StyledCol style={{borderRadius:"15px",marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></StyledCol>
                            <StyledCol style={{borderRadius:"15px",marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></StyledCol>
                        </AliceCarousel>
                    </Col>
                </Row>  
        </Layout>
        );
    } else {
        return <div>Loading...</div>;
    }
}


export default Weapons;