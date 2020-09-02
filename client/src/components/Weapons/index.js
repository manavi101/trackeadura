import React from 'react';
import {Row,Col,Layout} from 'antd';
import Header from '../Header';
import Container from '../UI/container';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
  const Weapons = () => {

    const carousel = {
        mouseTrackingEnabled: true,
        buttonsDisabled: true,
        dotsDisabled:true,
        responsive:{
            0: {
                items: 3,
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


    return(
        <Layout style={{height:'100%',backgroundColor:'#111'}}>
            <Header/>
            <Row className="" style={{backgroundColor:"White"}}>
                <Col xs={24} className="">
                    <AliceCarousel {...carousel}>
                        <Container style={{marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></Container>
                        <Container style={{marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></Container>
                        <Container style={{marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></Container>
                        <Container style={{marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></Container>
                        <Container style={{marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></Container>
                        <Container style={{marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></Container>
                        <Container style={{marginLeft:"10px"}}><h1>Vandal</h1><h1>Vandal</h1></Container>
                    </AliceCarousel>
                    <Container><h1>Vandal</h1></Container>
                </Col>
            </Row>  
        </Layout>
    ); 
}

export default Weapons;