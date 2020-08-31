import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Image,
    Spin
} from 'antd';

const MatchOverview = (props) => {

    const [matchData,setMatchData] = useState({})

    useEffect(()=>{
        if(props.matchData)
            setMatchData(props.matchData)
    },[])

    let matchOverview;
    matchData ? matchOverview = (
        <Row align="middle" style={styles.container}>
            <Col span={3} style={styles.agentImageContainer}>
                <div>
                    <img src={matchData.agentUri} style={{borderRadius:15}}/>
                </div>
            </Col>
            <Col span={4}>
                <Row style={styles.boldText}>{matchData.matchResult}</Row>
                <Row style={styles.position}>{matchData.userPosition}</Row>
            </Col>
            <Col span={4}>
                <Row style={styles.boldText}>{matchData.userKDA} KD</Row>
                <Row style={styles.defaultText}>{matchData.userKDA2}</Row>
            </Col>
            <Col span={3}>
                <Row style={styles.boldText}>{matchData.userKPR} KPR</Row>
                <Row style={styles.defaultText}>{matchData.userADR} ADR</Row>
            </Col>
            <Col span={5}>
                <Row style={styles.boldText}>{matchData.userCombatScore} Combat Score</Row>
                <Row style={styles.defaultText}>{"-"}</Row>
            </Col>
            <Col span={5}>
                <Row style={styles.defaultText}>{matchData.matchDuration}</Row>
                <Row style={styles.defaultText}>{matchData.matchModeMap}</Row>
            </Col>
        </Row>
    ) : matchOverview = <Spin/>

    return matchOverview;
}

export default MatchOverview;

const styles = {
    container:{
        backgroundColor:"#141221",
        borderRadius:15,
    },
    agentImageContainer: {
        borderRadius:15
    },
    defaultText:{
        color:"#bbb",
        fontSize:16
    },
    boldText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    },
    position: {
        color:"#ab9924",
        fontWeight:'bold',
        fontSize:18
    }
}