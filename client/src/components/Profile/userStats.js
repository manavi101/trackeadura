import React, {useEffect,useState} from 'react';
import {
    Row,
    Col,
    Typography,
    Avatar
} from 'antd';

const statsJson = {
    kda:"1.50",
    hs:"28.7%",
    econScore:"52",
    avgDmg:"256",
    combatScore:"350"
}

const UserStats = (props) => {
    
    const [stats, setStats] = useState({})

    useEffect(()=>{
        setStats(statsJson)
    },[])

    return (
        <Row align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={styles.userStatsContainer}>
            <Col span={12}>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>KDA: </Col>
                        <Col style={styles.userStats2}>{stats.kda}</Col>
                    </Row>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>HS%: </Col>
                        <Col style={styles.userStats2}>{stats.hs}</Col>
                    </Row>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>Econ score: </Col>
                        <Col style={styles.userStats2}>{stats.econScore}</Col>
                    </Row>
            </Col>
            <Col span={12}>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>Dmg/round: </Col>
                        <Col style={styles.userStats2}>{stats.avgDmg}</Col>
                    </Row>
                    <Row gutter={[10,10]} justify={"space-between"} align={"middle"}>
                        <Col style={styles.userStats1}>Combat score: </Col>
                        <Col style={styles.userStats2}>{stats.combatScore}</Col>
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