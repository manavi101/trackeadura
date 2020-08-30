import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Spin,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const UserStats = (props) => {
    
    const [stats, setStats] = useState({})

    useEffect(()=>{
        if(props.userStats)
            setStats(props.userStats)
    },[])


    return (
        <Row align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={styles.userStatsContainer}>
            <Col span={12}>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>KDA: </Col>
                        <Col style={styles.userStats2}>{stats ? stats.kda : <Spin indicator={antIcon}/>}</Col>
                    </Row>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>HS%: </Col>
                        <Col style={styles.userStats2}>{stats ? stats.hs : <Spin indicator={antIcon}/>}</Col>
                    </Row>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>Econ score: </Col>
                        <Col style={styles.userStats2}>{stats ? stats.econScore : <Spin indicator={antIcon}/>}</Col>
                    </Row>
            </Col>
            <Col span={12}>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>Dmg/round: </Col>
                        <Col style={styles.userStats2}>{stats ? stats.avgDmg : <Spin indicator={antIcon}/>}</Col>
                    </Row>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>Combat score: </Col>
                        <Col style={styles.userStats2}>{stats ? stats.combatScore : <Spin indicator={antIcon}/>}</Col>
                    </Row>
            </Col>       
        </Row>
    )
}

export default UserStats;

const styles = {
    userStats1:{
        color:'#ccc'
    },
    userStats2:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    userStatContainer:{
        padding:5
    },
}