import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
} from 'antd';
import styles from './styles';

import MatchOverview from './matchOverview';

const matchHistoryBottom = () => {
    return (
            <Row style={{paddingTop:10}} >
                <Col span={24} style={styles.matchHistoryContainer2}>
                    <Row style={{paddingTop:10}}><Col span={24}><MatchOverview/></Col></Row>
                    <Row style={{paddingTop:10}}><Col span={24}><MatchOverview/></Col></Row>
                    <Row style={{paddingTop:10}}><Col span={24}><MatchOverview/></Col></Row>
                    <Row style={{paddingTop:10}}><Col span={24}><MatchOverview/></Col></Row>
                    <Row style={{paddingTop:10}}><Col span={24}><MatchOverview/></Col></Row>
                    <Row style={{paddingTop:10}}><Col span={24}><MatchOverview/></Col></Row>
                    <Row style={{paddingTop:10}}><Col span={24}><MatchOverview/></Col></Row>
                </Col>
            </Row>
    )
}

export default matchHistoryBottom;