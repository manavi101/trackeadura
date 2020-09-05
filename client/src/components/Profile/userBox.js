import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import {
    Divider,
    Row,
    Col,
    Spin,
    Skeleton
} from 'antd';
import AvatarUsername from '../UI/avatarUsername';
import styles from './styles';
import RankDisplay from '../UI/rankDisplay';
import UserStats from './userStats';
import StyledCol from '../UI/themed-components/col';

const UserBox = (props) => {

    const userData = useSelector(state => state.profileReducer.profileData.userData);

    
    let userBox;
    userData ? userBox = (
        <StyledCol span={24} style={{borderRadius:15}}>
            <AvatarUsername/>
            <Divider/>
            <RankDisplay rankUri={userData.rankUri} rankName={userData.rankName}/>
            <Divider/>
            <UserStats userStats={userData.userStats}/>
        </StyledCol>
    ) 
    : userBox = (
        <Col span={24} style={styles.userBoxContainer}>
            <Skeleton avatar active round paragraph={{ rows: 4 }} avatar={{active:true}}/>
        </Col>
    )

    return userBox;
}

export default UserBox;