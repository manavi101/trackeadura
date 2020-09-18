import React,{useContext,useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Row,Col} from 'antd';
import {ThemeContext} from 'styled-components';
import StyledButtonText from '../UI/themed-components/ButtonText';
import styles from './Weapons.module.css';


const WeaponsCategories = () =>{
    const[isLoaded,setisLoaded ] = useState(false)
    const[categories,setCategories] = useState([])

    const themeContext = useContext(ThemeContext);
    const WeaponsData = useSelector(state => state.weaponsReducer.weaponsData);

    useEffect(()=>{
            /*console.log(WeaponsData)
        const groupByKey = (list, key) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})
        categories = groupByKey(WeaponsData,"category");
        console.log(categories)*/
            const aux = WeaponsData
                .map((e)=>{
                    return e.category 
                })
                .filter((e,i,a)=>{
                    return a.indexOf(e) === i;
                })
            
            setCategories(aux)
            setisLoaded(true)
    },[WeaponsData])

    if(isLoaded){
        return(
            <Row style={{backgroundColor:themeContext.secondaryBackground,textAlign:"center",padding:"10px"}}>
                <Col xs={24} className="">
                    { 
                        categories.map((e)=>{
                            return <StyledButtonText type="text" ghost className={styles.categoriesButtons}>{e}</StyledButtonText>
                        })
                    }
                </Col>
            </Row>
        );
    }else{
        return <div>Loading...</div>;
    }
}

export default WeaponsCategories;