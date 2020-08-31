import React from 'react';
import {WindowSize} from '../../utils/actions'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => {
    const size = WindowSize()

    return(
        <div className="Header">
            {size.width > 768 ?<HeaderDesktop/>:<HeaderMobile/>}
        </div>
    )   
}


export default Header;