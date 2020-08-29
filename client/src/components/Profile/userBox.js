import React, {useEffect,useState} from 'react';
import {
    Divider,
    Row,
    Col,
} from 'antd';
import AvatarUsername from '../UI/avatarUsername';
import styles from './styles';
import RankDisplay from '../UI/rankDisplay';
import UserStats from './userStats';

const userBox = () => {
    return (
        <Col span={24} style={styles.userBoxContainer}>
            <AvatarUsername username={"parradura#LAS"} lowerText={"Last played: 2hrs ago"} avatarUri={process.env.PUBLIC_URL + 'images/profile/generic-profile-icon.png'}/>
            <Divider/>
            <RankDisplay rankUri={process.env.PUBLIC_URL + 'images/ranks/Immortal1.svg'} rankName={"Immortal 1"}/>
            <Divider/>
            <UserStats />
        </Col>
    )
}

export default userBox;