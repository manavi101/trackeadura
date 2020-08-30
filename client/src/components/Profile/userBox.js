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

const UserBox = (props) => {

    const [userData,setUserData] = useState(null);
    
    useEffect(()=>{
        if(props.userData)
            setUserData(props.userData)
    },[])

    let userBox;
    userData ? userBox = (
        <Col span={24} style={styles.userBoxContainer}>
            <AvatarUsername username={userData.username} lowerText={userData.lastPlayed} avatarUri={userData.avatarUri}/>
            <Divider/>
            <RankDisplay rankUri={userData.rankUri} rankName={userData.rankName}/>
            <Divider/>
            <UserStats userStats={userData.userStats}/>
        </Col>
    ) 
    : userBox = (
        <Col span={24} style={styles.userBoxContainer}>
            <Skeleton avatar active round paragraph={{ rows: 4 }} avatar={{active:true}}/>
        </Col>
    )

    return userBox;
}

export default UserBox;