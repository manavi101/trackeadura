import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Typography,
    Avatar
} from 'antd';
import {useSelector} from 'react-redux';

const AvatarUsername = (props) => {

    const userData = useSelector(state => state.profileReducer.profileData.userData);
    
    return (
        <Row gutter={10,10} justify={"start"}>
            <Col style={styles.avatarContainer}>
                <Avatar size={75} gap={5} src={userData.avatarUri}/>  
            </Col>
            <Col style={styles.nameContainer}>
                <Typography style={styles.username}>{userData.username}{userData.tagLine}</Typography>
                <Typography style={styles.lowerText}>{userData.lastPlayed}</Typography>
            </Col>
        </Row>
    )
}

export default AvatarUsername;

const styles = {
    username:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    lowerText:{
        color:'#ccc',
        fontSize:16
    },
    avatarContainer:{

    }
}