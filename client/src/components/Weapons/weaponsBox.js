import React,{useContext,useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Row,Col} from 'antd';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import StyledCol from '../UI/themed-components/col';
import styles from './Weapons.module.css';
import Loading from '../UI/themed-components/Loading';


  const WeaponsBox= (props) => {

    const[isLoaded,setisLoaded ] = useState(false)
    const[Weapons,setWeapons] = useState([])

    const WeaponsData = useSelector(state => state.weaponsReducer.weaponsData);
    
 
    

  
    useEffect(()=>{
        const aux = WeaponsData
            .filter((e,i,a)=>{
                return e.category === props.params.selectedCategorie;
            })           
        
        setWeapons(aux)
        setisLoaded(true)
        console.log(aux)
        console.log(props.params)
    },[WeaponsData,props.params.selectedCategorie])
    
    if (isLoaded) {
        return (
            <Row className="" style={{display:"flex",justifyContent:"center"}}>
                {
                    Weapons.map((e)=>{
                        return <StyledCol xs={7} md={4} style={{borderRadius:"15px",marginLeft:"3%",marginTop:"20px"}}><img src={process.env.PUBLIC_URL +"/images/weapons/"+ e.img} style={{width:"90%",height:"80px"}}></img></StyledCol>
                    })
                }
            </Row>  
        );
    } else {
        return <Loading/>;
    }
}


export default WeaponsBox;