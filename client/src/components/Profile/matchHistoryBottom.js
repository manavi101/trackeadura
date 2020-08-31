import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
} from 'antd';
import styles from './styles';

import MatchOverview from './matchOverview';

const MatchHistoryBottom = (props) => {

    const [matchHistory,setMatchHistory] = useState([]);

    useEffect(()=>{
        if(props.matchHistory)
            setMatchHistory(props.matchHistory)
    },[])
    
    return (
            <Row style={{paddingTop:10}} >
                <Col span={24} style={styles.matchHistoryContainer2}>
                    {matchHistory.map((item,index)=>{
                        return(
                            <Row style={{paddingTop:10}} key={index}><Col span={24}><MatchOverview matchData={item}/></Col></Row>
                        )
                    })}
                </Col>
            </Row>
    )
}

export default MatchHistoryBottom;