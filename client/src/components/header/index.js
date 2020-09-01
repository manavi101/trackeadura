import React from 'react';
import {WindowSize} from '../../utils/actions'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
    const size = WindowSize()

    return(
        <div className="Header" style={{position:"sticky",top:0,zIndex:11}}>
            {size.width > 768 ?<HeaderDesktop/>:<HeaderMobile/>}
        </div>
    )   
}


export default Header;