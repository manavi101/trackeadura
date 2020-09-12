import React from 'react';
import {WindowSize} from '../../utils/actions'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import {withRouter} from 'react-router-dom';

const Header = (props) => {
    const size = WindowSize()
    const { location } = props
    console.log('LOCATION',location)

    if(location.pathname != '/')
        return(
            <div className="Header" style={{position:"sticky",top:0,zIndex:11}}>
                {size.width > 768 ?<HeaderDesktop changeTheme={props.changeTheme}/>:<HeaderMobile changeTheme={props.changeTheme}/>}
            </div>
        );
    else return null   ;
}


export default withRouter(Header);