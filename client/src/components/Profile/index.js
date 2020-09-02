import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
    Row,
    Col,
} from 'antd';
import Header from '../Header';
import MatchHistoryBottom from './matchHistoryBottom';
import matchHistoryTop from './matchHistoryTop';
import UserBox from './userBox';
import {setProfileData} from '../../actions/index';
import profileData from './data';

const Profile = (props) => {

    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const setData = async () => {
            console.log('ID: ',props.match.params.userId)
            let _profileData = profileData;
            _profileData.userData.username = props.match.params.userId
            _profileData.userData.tagLine = '#'+props.match.params.tagLine
            dispatch(setProfileData(_profileData))
            setLoading(false)
        }
        setData()
    },[])

    if(!loading)
        return(
            <div style={{backgroundColor:'#111'}}>
                <Header/>
                <div style={{paddingTop: 24,paddingLeft:5,paddingRight:5,paddingBottom:24}}>
                <Row gutter={[10,10]}>
                    <Col md={10} xs={24} lg={8} xl={6}>
                            <Row>
                                <UserBox/>
                            </Row>
                    </Col>
                    <Col md={14} xs={24} lg={16} xl={18}>
                            {matchHistoryTop()}
                            <MatchHistoryBottom/>
                    </Col>
                </Row>
                </div>
            </div>
        )
    else return null
}



export default Profile;