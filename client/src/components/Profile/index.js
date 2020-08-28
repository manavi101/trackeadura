import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
} from 'antd';
import styles from './styles';

import matchHistoryBottom from './matchHistoryBottom';
import matchHistoryTop from './matchHistoryTop';
import userBox from './userBox';

const Profile = () => {

    return(
            <Row gutter={[10,10]}>
                <Col span={5}>
                    <Row>
                        <Col span={24}>{userBox()}</Col>
                        <Col span={24} style={{paddingTop:10}}>{userBox()}</Col>
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



export default Profile;