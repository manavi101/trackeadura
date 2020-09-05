import React, {useEffect,useState} from 'react';
import {
    Image
} from 'antd';
import {useSelector} from 'react-redux';
import StyledCol from './themed-components/col';
import StyledRow from './themed-components/row';

const RankDisplay = (props) => {

    const userData = useSelector(state => state.profileReducer.profileData.userData);

    return (
        <StyledRow style={styles.rankContainer} justify={"center"} align={"middle"}>
            <StyledCol span={9} style={styles.rankImageContainer}>
                <div style={{backgroundColor:'#c2171733',borderRadius:90,padding:0}}>
                    <Image src={userData.rankUri} preview={false}/>
                </div>
            </StyledCol>
            <StyledCol span={15} style={styles.rankName}>
                {userData.rankName}
            </StyledCol>
        </StyledRow>
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