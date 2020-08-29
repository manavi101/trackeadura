import React from 'react';
import {WindowSize} from '../../utils/actions'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const HeaderComponent = () => {
    const size = WindowSize()

    return(
        size.width > 768 ?<HeaderDesktop/>:<HeaderMobile/>
    )   
}

const styles = {
    headerContainer:{
        height:64
    },
    headerLogoContainer: {
    },
    headerLogo:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
}

export default HeaderComponent;