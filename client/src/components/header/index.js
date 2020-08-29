import React from 'react';
import {WindowSize} from '../../utils/actions'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
    const size = WindowSize()

    return(
        <div style={styles.header}>
            {size.width > 768 ?<HeaderDesktop/>:<HeaderMobile/>}
        </div>
    )   
}

const styles = {
    header: {
        backgroundColor:'#465775',
        height:'65px'
    }
}

export default Header;