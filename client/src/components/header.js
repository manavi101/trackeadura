import React, {useEffect,useState} from 'react';
import {Menu,Space} from 'antd';
import {WindowSize} from '../utils/actions'

const HeaderComponent = () => {

    let header
    let size = WindowSize()
    
    size.width > 950 ? header = (
        <Space direction="horizontal" align="start" size="middle" style={styles.headerContainer}>
            <div style={styles.headerLogoContainer}>
                <p style={styles.headerLogo}>Trackeadura</p>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Space>
    )
    :
    header = (
        <Space direction="horizontal" align="start" size="middle" style={styles.headerContainer}>
            <div style={styles.headerLogoContainer}>
                <p style={styles.headerLogo}>Trackeadura chiquito</p>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Space>
    )

    return header;

    
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

export default HeaderComponent;