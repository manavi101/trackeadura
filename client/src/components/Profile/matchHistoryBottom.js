import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
} from 'antd';
import styles from './styles';


const matchHistoryBottom = () => {
    return (
            <Row style={{paddingTop:10}}>
                <Col span={24} style={styles.matchHistoryContainer2}>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                </Col>
            </Row>
    )
}

export default matchHistoryBottom;