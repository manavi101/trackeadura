import React, {useState} from 'react';
import HeaderMobileBody from './HeaderMobileBody.js';
import HeaderMobileSearchBar from './HeaderMobileSearchBar.js';

const HeaderMobile = (props) => {
    const [ShowSearch, setShowSearch] = useState(null);

        return(
            <div>
                {ShowSearch ? 
                    <HeaderMobileSearchBar setShowSearch={setShowSearch}/> 
                :  
                    <HeaderMobileBody themes={props.themes} changeTheme={props.changeTheme} setShowSearch={setShowSearch}/>
                }
            </div>
        )
       
}


export default HeaderMobile;