import React, {useEffect,useState} from 'react';
import {Menu,Space} from 'antd';

const HeaderMobile = () => {


    return(
        <Space direction="horizontal" align="start" size="middle" style={styles.headerContainer}>
    <div style={styles.headerLogoContainer}>
        <p style={styles.headerLogo}>Trackeadura</p>
    </div>
    </Space>
    )   
}

const styles = {
    headerContainer:{
        height:64
    },
    headerLogoContainer: {
    },
    headerLogo:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
}

export default HeaderMobile;