import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
    Row,
    Col,
} from 'antd';

import MatchHistoryBottom from './matchHistoryBottom';
import matchHistoryTop from './matchHistoryTop';
import UserBox from './userBox';
import {changeValue} from '../../actions/index';
import profileData from './data';

const Profile = () => {

    const dispatch = useDispatch()
    const profileDataRed = useSelector(state => state.profileReducer.profileData);

    useEffect(()=>{
        dispatch(changeValue(profileData))
        console.log('profileData: ',profileDataRed)
    },[])

    return(
            <Row gutter={[10,10]}>
                <Col md={10} xs={24} lg={8} xl={6}>
                        <Row>
                            <UserBox userData={profileData.userData}/>
                        </Row>
                        <Row style={{paddingTop:10}}>
                            <UserBox userData={profileData.userData}/>
                        </Row>
                </Col>
                <Col md={14} xs={24} lg={16} xl={18}>
                        {matchHistoryTop()}
                        <MatchHistoryBottom matchHistory={profileData.matchHistory}/>
                </Col>
            </Row>
    )
}



export default Profile;