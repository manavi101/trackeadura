import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Image,
    Spin,
    Avatar
} from 'antd';
import styles from './matchOverview.module.css';
import { WindowSize } from '../../utils/actions';
import StyledRow2 from '../UI/themed-components/row2';

const MatchOverview = (props) => {

    const [matchData,setMatchData] = useState({})
    const size = WindowSize()

    useEffect(()=>{
        if(props.matchData)
            setMatchData(props.matchData)
    },[])

    let matchOverview;
    matchData ? matchOverview = (
        <StyledRow2 align="middle" style={styles2.container}>
            <Col span={3} style={styles2.agentImageContainer}>
                <div style={{borderRadius:15}}>
                    <Avatar src={matchData.agentUri} className={styles.agentImage} size={size.width / 15} shape="square"/>
                </div>
            </Col>
            <Col span={4}>
                <Row style={styles2.boldText}>{matchData.matchResult}</Row>
                <Row style={styles2.position}>{matchData.userPosition}</Row>
            </Col>
            <Col span={4}>
                <Row style={styles2.boldText}>{matchData.userKDA} KD</Row>
                <Row style={styles2.defaultText}>{matchData.userKDA2}</Row>
            </Col>
            <Col span={3}>
                <Row style={styles2.boldText}>{matchData.userKPR} KPR</Row>
                <Row style={styles2.defaultText}>{matchData.userADR} ADR</Row>
            </Col>
            <Col span={5}>
                <Row style={styles2.boldText}>{matchData.userCombatScore} Combat Score</Row>
                <Row style={styles2.defaultText}>{"-"}</Row>
            </Col>
            <Col span={5}>
                <Row style={styles2.defaultText}>{matchData.matchDuration}</Row>
                <Row style={styles2.defaultText}>{matchData.matchModeMap}</Row>
            </Col>
        </StyledRow2>
    ) : matchOverview = <Spin/>

    return matchOverview;
}

export default MatchOverview;

const styles2 = {
    container:{
        borderRadius:15,
        padding:0
    },
    agentImageContainer: {
        borderRadius:15
    },
    defaultText:{
        color:"#bbb",
        fontSize:"1vw"
    },
    boldText:{
        color:"#eee",
        fontWeight:"bold",
        fontSize:"1.2vw"
    },
    position: {
        color:"#ab9924",
        fontWeight:'bold',
        fontSize:18
    }
}