import React, {useState} from 'react';
import HeaderMobileBody from './HeaderMobileBody.js';
import HeaderMobileSearchBar from './HeaderMobileSearchBar.js';

const HeaderMobile = () => {
    const [ShowSearch, setShowSearch] = useState(null);

        return(ShowSearch ? <HeaderMobileSearchBar setShowSearch={setShowSearch}/> :  <HeaderMobileBody setShowSearch={setShowSearch}/>)
       
}



export default HeaderMobile;