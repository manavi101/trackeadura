import React from 'react';
import {Row,Col,Button} from 'antd';
import styles from './HeaderDesktop.module.css';

const HeaderDesktop = () => {


    return(
        <Row>
            <Col span={6}>
                <p className={styles.headerLogo}>Trackeadura</p>
            </Col>
            <Col span={12}></Col>
            <Col span={6} size="large" className={styles.headerSignIn}>    
                <Button type="text" primary className={styles.headerSignInButton}>Iniciar Sesion</Button>
            </Col>
        </Row>
    )   
}



export default HeaderDesktop;
