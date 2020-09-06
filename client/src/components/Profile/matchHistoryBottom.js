import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
} from 'antd';
import styles from './styles';
import {WindowSize} from '../../utils/actions';
import {useSelector} from 'react-redux';
import StyledCol from '../UI/themed-components/col';

import MatchOverview from './matchOverview';
import MatchOverviewMobile from './matchOverviewMobile';

const MatchHistoryBottom = (props) => {

    const matchHistory = useSelector(state => state.profileReducer.profileData.matchHistory) || [];
    const size = WindowSize()
    const [loading,setLoading] = useState(true)
    console.log('PROPS STYLED',props)

    const matchItem = matchHistory.map((item,index)=>{
            return (
                <Row style={{paddingTop:15}} key={index}>
                    <Col span={24}>
                        {size.width > 991 ? <MatchOverview matchData={item}/> : <MatchOverviewMobile matchData={item}/> }
                    </Col>
                </Row>
            )
        })
    
    if(loading)
        return (
                <Row style={{paddingTop:10}} >
                    <StyledCol span={24} style={{borderRadius:15}}>
                        {matchItem}
                    </StyledCol>
                </Row>
        )
    else return 'ola'
}

export default MatchHistoryBottom;