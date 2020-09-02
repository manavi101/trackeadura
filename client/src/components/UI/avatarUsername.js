import React, {useEffect,useState} from 'react';
import {
    Typography,
    Avatar
} from 'antd';
import StyledRow from './themed-components/row';
import StyledCol from './themed-components/col';
import {useSelector,shallowEqual} from 'react-redux';

const AvatarUsername = (props) => {

    const userData = useSelector(state => state.profileReducer.profileData.userData);
    
    useEffect(()=> {
        console.log('DATOS ACTUALIZAUS',userData)
    },[userData])

    return (
        <StyledRow gutter={10,10} justify={"start"}>
            <StyledCol style={styles.avatarContainer}>
                <Avatar size={75} gap={5} src={userData.avatarUri}/>  
            </StyledCol>
            <StyledCol style={styles.nameContainer}>
                <Typography style={styles.username}>{userData.username}{userData.tagLine}</Typography>
                <Typography style={styles.lowerText}>{userData.lastPlayed}</Typography>
            </StyledCol>
        </StyledRow>
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