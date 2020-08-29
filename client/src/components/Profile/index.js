import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
} from 'antd';
import styles from './styles';
import Container from '../UI/container';

import matchHistoryBottom from './matchHistoryBottom';
import matchHistoryTop from './matchHistoryTop';
import userBox from './userBox';

const Profile = () => {

    return(
            <Row gutter={[10,10]}>
                <Col md={10} xs={24} lg={8} xl={6}>
                        <Row>{userBox()}</Row>
                        <Row style={{paddingTop:10}}>{userBox()}</Row>
                </Col>
                <Col md={14} xs={24} lg={16} xl={18}>
                        {matchHistoryTop()}
                        {matchHistoryBottom()}
                </Col>
            </Row>
    )
}



export default Profile;