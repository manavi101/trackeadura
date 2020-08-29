import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Image
} from 'antd';

const MatchOverview = () => {

    const dataJson = {
        matchResult:"13-9",
        matchWin:true,
        userPosition:"1st",
        userKDA:"2.28",
        userKDA2:"27/12/5",
        userKPR:"2.89",
        userADR:"238",
        userCombatScore:"432",
        matchDuration:"37:56",
        matchModeMap:"Competitive - Bind",
        agentUri:process.env.PUBLIC_URL + 'images/agents/omen-concept-headshot.png'
    }

    const [matchData,setMatchData] = useState({})

    useEffect(()=>{
        setMatchData(dataJson)
    },[])

    return (
        <Row align="middle" style={matchData.matchWin ? styles.containerWin : styles.containerLoss}>
            <Col span={3} style={styles.agentImageContainer}>
                <Image src={matchData.agentUri} />
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
    )
}

export default MatchOverview;

const styles = {
    containerWin:{
        backgroundColor:"#141221",
        borderRadius:15,
        borderLeftColor:'green',
        borderLeftWidth:3
    },
    containerLoss:{
        backgroundColor:"#141221",
        borderRadius:15,
        borderLeftColor:'red',
        borderLeftWidth:3
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