import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Image
} from 'antd';
import {useSelector} from 'react-redux';

const RankDisplay = (props) => {

    const userData = useSelector(state => state.profileReducer.profileData.userData);

    return (
        <Row style={styles.rankContainer} justify={"center"} align={"middle"}>
            <Col span={12} style={styles.rankImageContainer}>
                <Image src={userData.rankUri} preview={false}/>
            </Col>
            <Col span={12} style={styles.rankName}>
                {userData.rankName}
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