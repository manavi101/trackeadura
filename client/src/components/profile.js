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

const {Content} = Layout

const Profile = () => {

    const renderUserBox = () => {
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

    const matchHistoryTop = () => {
        return (
                <Row style={styles.matchHistoryContainer}>
                    <Col span={18}>
                        <Row>
                            <Col span={6}>
                                <Row style={styles.matchHistoryTopText1}>19W 13L</Row>
                                <Row style={styles.matchHistoryTopText2}>Last 27</Row>
                            </Col>
                            <Col span={6}>
                                <Row style={styles.matchHistoryTopText1}>70%</Row>
                                <Row style={styles.matchHistoryTopText2}>Win Rate</Row>
                            </Col>
                            <Col span={6}>
                                <Row style={styles.matchHistoryTopText1}>1.25</Row>
                                <Row style={styles.matchHistoryTopText2}>KD</Row>
                            </Col>
                            <Col span={6}>
                                <Row style={styles.matchHistoryTopText1}>588</Row>
                                <Row style={styles.matchHistoryTopText2}>Avg. Score</Row>
                            </Col>
                        </Row>
                    </Col>           
                    <Col span={6}>
                        <Row>
                            <Col span={8}>
                                <Row justify="center">
                                    <Avatar src={process.env.PUBLIC_URL + 'images/agents/jett-concept-headshot.png'} size="large" style={styles.matchHistoryTopAvatar}/>
                                </Row>
                                <Row justify="center" style={styles.matchHistoryAvatarText}>
                                    100%
                                </Row>
                            </Col>
                            <Col span={8}>
                                <Row justify="center">
                                    <Avatar src={process.env.PUBLIC_URL + 'images/agents/omen-concept-headshot.png'} size="large" style={styles.matchHistoryTopAvatar}/>
                                </Row>
                                <Row justify="center" style={styles.matchHistoryAvatarText}>
                                    90%
                                </Row>
                            </Col>
                            <Col span={8}>
                                <Row justify="center">
                                    <Avatar src={process.env.PUBLIC_URL + 'images/agents/sova-concept-headshot.png'} size="large" style={styles.matchHistoryTopAvatar} gap={3}/>
                                </Row>
                                <Row justify="center" style={styles.matchHistoryAvatarText}>
                                    75%
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        )
    }

    const matchHistoryBottom = () => {
        return (
                <Row style={styles.matchHistoryContainer2}>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                </Row>
        )
    }

    return(
            <Row gutter={[10,10]}>
                <Col span={5}>
                    <Row>
                        <Col span={24}>{renderUserBox()}</Col>
                        <Col span={24} style={{paddingTop:10}}>{renderUserBox()}</Col>
                    </Row>
                </Col>
                <Col span={19}>
                    <Row>
                        <Col span={24}>{matchHistoryTop()}</Col>
                        <Col span={24} style={{paddingTop:10}}>{matchHistoryBottom()}</Col>
                    </Row>
                </Col>
            </Row>
    )
}

const styles = {
    userBoxContainer:{
        backgroundColor:'#282a4a',
        borderRadius:15,
        padding:15
    },
    avatarContainer: {
    },
    usernameContainer:{
    },
    username:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    lastPlayed:{
        color:'#ccc',
        fontSize:16
    },
    rankContainer:{
        width:'100%',
    },
    rankImageContainer:{
        //width:'50%',
        flex:1,

    },
    rankName:{
        color:'#c21717',
        fontSize:16,
        fontWeight:'500'
    },
    userStatsContainer:{

    },
    userStats1:{
        color:'#ccc'
    },
    userStats2:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    userStatContainer:{
        padding:5
    },
    matchHistoryContainer: {
        backgroundColor:'#282a4a',
        borderRadius:15,
        padding:15
    },
    matchHistoryTopText1: {
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    matchHistoryTopText2: {
        color:'#ccc',
        fontSize:14,
        fontWeight:'400'
    },
    matchHistoryTopAvatar: {
        borderColor:'#284a42',
        borderWidth:10
    },
    matchHistoryAvatarText: {
        color:'#fff',
        fontSize:16,
        fontWeight:'500'
    },
    matchHistoryContainer2: {
        height:1000,
        backgroundColor:'#282a4a',
        borderRadius:15,
        padding:15

    }
}

export default Profile;