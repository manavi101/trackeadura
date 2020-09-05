import React, {useEffect,useState} from 'react';
import {
    Typography,
    Avatar
} from 'antd';
import styles from './avatarUsername.module.css';  
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
            <StyledCol className={styles.avatarContainer}>
                <Avatar size={75} gap={5} src={userData.avatarUri}/>  
            </StyledCol>
            <StyledCol className={styles.nameContainer}>
                <p className={styles.username}>{userData.username}{userData.tagLine}</p>
                <p className={styles.lowerText}>{userData.lastPlayed}</p>
            </StyledCol>
        </StyledRow>
    )
}

export default AvatarUsername;

