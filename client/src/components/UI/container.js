import React, {useEffect,useState} from 'react';
import StyledRow from './themed-components/row';
import StyledCol from './themed-components/col';

const Container = (props) => {
    return (
        <StyledRow style={styles.outerContainer}>
            <StyledCol span={props.span} style={styles.innerContainer}>
                {props.children}
            </StyledCol>
        </StyledRow>
    )
}

export default Container;

const styles = {
    innerContainer: {
        borderRadius:15,
        padding:15
    },
    outerContainer: {
        paddingTop:10
    }
}