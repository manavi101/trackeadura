import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
} from 'antd';
import styles from './styles';
import {WindowSize} from '../../utils/actions';
import {useSelector} from 'react-redux';

import MatchOverview from './matchOverview';
import MatchOverviewMobile from './matchOverviewMobile';

const MatchHistoryBottom = (props) => {

    const matchHistory = useSelector(state => state.profileReducer.profileData.matchHistory) || [];
    const size = WindowSize()


    const matchItem = () => {
        let arr = []
        {matchHistory.map((item,index)=>{
            arr.push (
                <Row style={{paddingTop:10}} key={index}>
                    <Col span={24}>
                        {size.width > 991 ? <MatchOverview matchData={item}/> : <MatchOverviewMobile matchData={item}/> }
                    </Col>
                </Row>
            )
        })}
        return arr;
    }
    
    return (
            <Row style={{paddingTop:10}} >
                <Col span={24} style={styles.matchHistoryContainer2}>
                    {matchItem()}
                </Col>
            </Row>
    )
}

export default MatchHistoryBottom;