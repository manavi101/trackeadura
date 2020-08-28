import React, {useEffect,useState} from 'react';
import {
    Space,
    Layout,
    Typography,
    Avatar,
    Divider,
    Image,
    Row,
    Col,
    Grid
} from 'antd';
import styles from './styles';

const {Content} = Layout

const userBox = () => {
    return (
        <Content style={styles.userBoxContainer}>
            <Row>
                <Space direction='horizontal'>
                    <Col style={styles.avatarContainer}>
                        <Avatar size={75} gap={5} src={process.env.PUBLIC_URL + 'images/Immortal1'}> </Avatar>       
                    </Col>
                    <Col style={styles.nameContainer}>
                        <Typography style={styles.username}>parradura#LAS</Typography>
                        <Typography style={styles.lastPlayed}>Last played: 2hs ago</Typography>
                    </Col>
                </Space>
            </Row>
            <Divider/>
            <Row style={styles.rankContainer}>
                <Space direction="horizontal" size="large" >
                    <Col style={styles.rankImageContainer}>
                        <Image src={process.env.PUBLIC_URL + 'images/ranks/Immortal1.svg'} width={125} height={125} preview={false}/>
                    </Col>
                    <Col style={styles.rankName}>
                        Immortal 1
                    </Col>
                </Space>
            </Row>
            <Divider/>
            <Content style={styles.userStatsContainer}>
                <Row align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col>
                        <Space direction='vertical'>
                            <Row>
                                <Space direction='horizontal'>
                                    <Col style={styles.userStats1}>KDA: </Col>
                                    <Col style={styles.userStats2}>1.50</Col>
                                </Space>
                            </Row>
                            <Row>
                                <Space direction='horizontal'>
                                    <Col style={styles.userStats1}>HS%: </Col>
                                    <Col style={styles.userStats2}>28.7%</Col>
                                </Space>
                            </Row>
                            <Row>
                                <Space direction='horizontal'>
                                    <Col style={styles.userStats1}>Econ score: </Col>
                                    <Col style={styles.userStats2}>52</Col>
                                </Space>
                            </Row>
                        </Space>
                    </Col>
                    <Col>
                        <Space direction='vertical'>
                            <Row>
                                <Space direction='horizontal'>
                                    <Col style={styles.userStats1}>Dmg/round: </Col>
                                    <Col style={styles.userStats2}>256</Col>
                                </Space>
                            </Row>
                            <Row>
                                <Space direction='horizontal'>
                                    <Col style={styles.userStats1}>Combat score: </Col>
                                    <Col style={styles.userStats2}>340</Col>
                                </Space>
                            </Row>
                        </Space>
                    </Col>       
                </Row>
            </Content>
        </Content>
    )
}

export default userBox