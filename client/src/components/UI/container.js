import React, {useEffect,useState} from 'react';
import {
    Row,
    Col
} from 'antd';

const Container = (props) => {
    return (
        <Row style={styles.outerContainer}>
            <Col span={20} style={styles.innerContainer}>
                {props.children}
            </Col>
        </Row>
    )
}

export default Container;

const styles = {
    innerContainer: {
        backgroundColor:'#282a4a',
        borderRadius:15,
        padding:15
    },
    outerContainer: {
        paddingTop:10
    }
}