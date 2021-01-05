import React from 'react';
import { Parallax } from './Parallax';

const styles = {
  root:{
    flex:1,
    zIndex:-2
  }
}

const Error = (props) => {

  const { errorCode } = props

    return(
        <div style={styles.root}>
            <Parallax 
                image={'https://www.insidetheiot.com/wp-content/uploads/2019/05/Update-rollback.jpg'}
                text={errorCode}
            />
        </div>
    )
}


export default Error;