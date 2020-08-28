import React, {useEffect,useState} from 'react';
import {
    Space,
    Layout,
    Typography,
    Avatar,
    Divider,
    Image
} from 'antd';

const {Content} = Layout

const Profile = () => {

    const renderUserBox = () => {
        return (
            <Content style={styles.userBoxContainer}>
                <Space direction="horizontal" size="large">
                    <Content style={styles.avatarContainer}>
                        <Avatar size="large" gap={5} src={process.env.PUBLIC_URL + 'images/Immortal1'}> </Avatar>       
                    </Content>
                    <Content style={styles.nameContainer}>
                        <Typography style={styles.username}>Parradura</Typography>
                    </Content>
                </Space>
                <Divider/>
                <Content style={styles.rankContainer}>
                    <Space direction="horizontal" size="large" >
                        <Content style={styles.rankImageContainer}>
                            <Image src={process.env.PUBLIC_URL + 'images/Immortal1.png'} width={125} height={125}/>
                        </Content>
                        <Content style={styles.rankNameContainer}>
                            <Typography style={styles.rankName}>Immortal 1</Typography>
                        </Content>
                    </Space>
                </Content>
            </Content>
        )
    }

    return(
        <Layout>
            {renderUserBox()}
        </Layout>
    )
}

const styles = {
    userBoxContainer:{
        backgroundColor:'#2a3059',
        width:'20%',
        borderRadius:15,
        padding:15
    },
    avatarContainer: {
    },
    usernameContainer:{
    },
    username:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    rankContainer:{
        width:'100%',
    },
    rankImageContainer:{
        //width:'50%',
        flex:1,
        backgroundColor:'#ff88'

    },
    rankNameContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        //width:'50%'
    },
    rankName:{
        color:'#c21717',
        fontSize:16,
        fontWeight:'500'
    }
}

export default Profile;