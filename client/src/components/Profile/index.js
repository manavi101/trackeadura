import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
    Row,
    Col,
} from 'antd';

import MatchHistoryBottom from './matchHistoryBottom';
import matchHistoryTop from './matchHistoryTop';
import UserBox from './userBox';
import {setProfileData} from '../../actions/index';
import profileData from './data';

const Profile = (props) => {

    const dispatch = useDispatch()
    //const _profileData = useSelector(state => state.profileReducer.profileData);

    useEffect(()=>{
        console.log('ID: ',props.match.params.userId)
        let _profileData = profileData;
        _profileData.userData.username = props.match.params.userId
        _profileData.userData.tagLine = '#'+props.match.params.tagLine
        dispatch(setProfileData(_profileData))
    },[])

/*     useEffect(()=>{
        dispatch(setProfileData({}))
    },[]) */
    
    return(
            <Row gutter={[10,10]}>
                <Col md={10} xs={24} lg={8} xl={6}>
                        <Row>
                            <UserBox userData={profileData.userData}/>
                        </Row>
                      {/*   <Row style={{paddingTop:10}}>
                            <UserBox userData={profileData.userData}/>
                        </Row> */}
                </Col>
                <Col md={14} xs={24} lg={16} xl={18}>
                        {matchHistoryTop()}
                        <MatchHistoryBottom matchHistory={profileData.matchHistory}/>
                </Col>
            </Row>
    )
}



export default Profile;