import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Typography,
    Avatar
} from 'antd';

const AvatarUsername = (props) => {
    return (
        <Row gutter={10,10} justify={"start"}>
            <Col style={styles.avatarContainer}>
                <Avatar size={75} gap={5} src={props.avatarUri}/>  
            </Col>
            <Col style={styles.nameContainer}>
                <Typography style={styles.username}>{props.username}</Typography>
                <Typography style={styles.lowerText}>{props.lowerText}</Typography>
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