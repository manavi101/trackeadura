import React, {useEffect,useState} from 'react';
import {
    Divider,
    Row,
    Col,
} from 'antd';
import AvatarUsername from '../UI/avatarUsername';
import styles from './styles';
import RankDisplay from '../UI/rankDisplay';

const userBox = () => {
    return (
        <Col span={24} style={styles.userBoxContainer}>
            <AvatarUsername username={"parradura#LAS"} lowerText={"Last played: 2hrs ago"} avatarUri={process.env.PUBLIC_URL + 'images/profile/generic-profile-icon.png'}/>
            <Divider/>
            <RankDisplay rankUri={process.env.PUBLIC_URL + 'images/ranks/Immortal1.svg'} rankName={"Immortal 1"}/>
            <Divider/>
                <Row align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={styles.userStatsContainer}>
                    <Col span={12}>
                            <Row gutter={[10,10]} justify={"start"} align={"middle"}>
                                <Col style={styles.userStats1}>KDA: </Col>
                                <Col style={styles.userStats2}>1.50</Col>
                            </Row>
                            <Row gutter={[10,10]} justify={"start"} align={"middle"}>
                                <Col style={styles.userStats1}>HS%: </Col>
                                <Col style={styles.userStats2}>28.7%</Col>
                            </Row>
                            <Row gutter={[10,10]} justify={"start"} align={"middle"}>
                                <Col style={styles.userStats1}>Econ score: </Col>
                                <Col style={styles.userStats2}>52</Col>
                            </Row>
                    </Col>
                    <Col span={12}>
                            <Row gutter={[10,10]} justify={"start"} align={"middle"}>
                                <Col style={styles.userStats1}>Dmg/round: </Col>
                                <Col style={styles.userStats2}>256</Col>
                            </Row>
                            <Row gutter={[10,10]} justify={"start"} align={"middle"}>
                                <Col style={styles.userStats1}>Combat score: </Col>
                                <Col style={styles.userStats2}>340</Col>
                            </Row>
                    </Col>       
                </Row>
        </Col>
    )
}

export default userBox;