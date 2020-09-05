import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Image,
    Spin,
    Avatar
} from 'antd';
import { useSelector } from 'react-redux';
import { WindowSize } from '../../utils/actions';

const MatchOverviewMobile = (props) => {

    const [matchData,setMatchData] = useState({})
    const size = WindowSize();
    
    useEffect(()=>{
        if(props.matchData)
            setMatchData(props.matchData)
    },[])

    let matchOverview;
    matchData ? matchOverview = (
        <StyledRow2 align="middle" style={styles.container}>
            <Col span={6} style={styles.agentImageContainer}>
                <div>
                    <Avatar src={matchData.agentUri} className={styles.agentImage} size={size.width / 10} shape="square"/>
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
            <Col span={10}>
                <Row style={styles.defaultText}>{matchData.matchDuration}</Row>
                <Row style={styles.defaultText}>{matchData.matchModeMap}</Row>
            </Col>
        </StyledRow2>
    ) : matchOverview = <Spin/>

    return matchOverview;
}

export default MatchOverviewMobile;

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
        fontSize:'2vw'
    },
    boldText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:'3vw'
    },
    position: {
        color:"#ab9924",
        fontWeight:'bold',
        fontSize:'3vw'
    }
}