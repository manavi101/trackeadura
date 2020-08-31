import React, {useEffect,useState} from 'react';
import {Row,Col,Button,Input,Divider} from 'antd';
import { SearchOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import styles from './HeaderMobileBody.module.css';

const HeaderMobileBody = (setShowSearch) => {
    return(
        <Row className={styles.headerRow}>
            <Col span={12} className={styles.headerColLogo}>
                <h2 className={styles.headerLogo}>Trackeadura</h2>
            </Col>
                <Col span={8} className={styles.headerSearchBarColAppearButton}>
                    <Button ghost type="text" icon={<SearchOutlined />} className={styles.headerSearchBarAppearButton} onClick={()=>setShowSearch.setShowSearch(true)}/>
                </Col>
            <Col span={4} size="large" className={styles.headerColSignIn}>    
                <Button type="text" ghost className={styles.headerSignInButton}><p style={{margin:"0px"}}>Iniciar</p><p style={{margin:"0px"}}>Sesion</p></Button>
            </Col>
        </Row>  
    ); 
}

export default HeaderMobileBody;