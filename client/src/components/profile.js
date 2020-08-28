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
                        <Avatar size="large" gap={5} src={process.env.PUBLIC_URL + 'images/Immortal1'}>
                        </Avatar>
                    </Content>
                    <Content style={styles.nameContainer}>
                        <Typography style={styles.username}>Parradura</Typography>
                    </Content>
                </Space>
                <Divider/>
                <Content>
                    <Content>
                        <Image src={process.env.PUBLIC_URL + 'images/Immortal1'}/>
                    </Content>
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
    }
}

export default Profile;