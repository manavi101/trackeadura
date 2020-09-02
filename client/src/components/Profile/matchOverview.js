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
                <Row style={styles2.boldText}><p>{matchData.matchResult}</p></Row>
                <Row style={styles2.position}><p>{matchData.userPosition}</p></Row>
            </Col>
            <Col span={4}>
                <Row style={styles2.boldText}><p>{matchData.userKDA} KD</p></Row>
                <Row style={styles2.defaultText}><p>{matchData.userKDA2}</p></Row>
            </Col>
            <Col span={3}>
                <Row style={styles2.boldText}><p>{matchData.userKPR} KPR</p></Row>
                <Row style={styles2.defaultText}><p>{matchData.userADR} ADR</p></Row>
            </Col>
            <Col span={5}>
                <Row style={styles2.boldText}><p>{matchData.userCombatScore} Combat Score</p></Row>
                <Row style={styles2.defaultText}><p>{"-"}</p></Row>
            </Col>
            <Col span={5}>
                <Row style={styles2.defaultText}><p>{matchData.matchDuration}</p></Row>
                <Row style={styles2.defaultText}><p>{matchData.matchModeMap}</p></Row>
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
        color:"#fff",
        fontWeight:"bold",
        fontSize:"1.3vw"
    },
    position: {
        color:"#ab9924",
        fontWeight:'bold',
        fontSize:18
    }
}