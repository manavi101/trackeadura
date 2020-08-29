import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Image
} from 'antd';

const RankDisplay = (props) => {
    return (
        <Row style={styles.rankContainer} justify={"center"} align={"middle"}>
            <Col span={12} style={styles.rankImageContainer}>
                <Image src={props.rankUri} preview={false}/>
            </Col>
            <Col span={12} style={styles.rankName}>
                {props.rankName}
            </Col>
        </Row>
    )
}

export default RankDisplay;

const styles = {
    rankContainer:{
        width:'100%',
    },
    rankImageContainer:{
        //width:'50%',
        flex:1,
    },
    rankName:{
        color:'#c21717',
        fontSize:16,
        fontWeight:'500'
    },
}