import React, {useEffect,useState} from 'react';
import {
    Avatar,
    Row,
    Col,
} from 'antd';
import styles from './styles';

const matchHistoryTop = () => {
    return (
            <Row style={styles.matchHistoryContainer}>
                <Col span={18} >
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
                                <Avatar src={process.env.PUBLIC_URL + '/images/agents/jett-concept-headshot.png'} size="large" style={styles.matchHistoryTopAvatar}/>
                            </Row>
                            <Row justify="center" style={styles.matchHistoryAvatarText}>
                                100%
                            </Row>
                        </Col>
                        <Col span={8}>
                            <Row justify="center">
                                <Avatar src={process.env.PUBLIC_URL+'/images/agents/omen-concept-headshot.png'} size="large" style={styles.matchHistoryTopAvatar}/>
                            </Row>
                            <Row justify="center" style={styles.matchHistoryAvatarText}>
                                90%
                            </Row>
                        </Col>
                        <Col span={8}>
                            <Row justify="center">
                                <Avatar src={process.env.PUBLIC_URL + '/images/agents/sova-concept-headshot.png'} size="large" style={styles.matchHistoryTopAvatar} gap={3}/>
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

export default matchHistoryTop;