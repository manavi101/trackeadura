import React, {useRef} from 'react';
import {Row,Col,Button,Input} from 'antd';
import styles from './HeaderMobileSearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
const HeaderMobileSearchBar = (setShowSearch) => {
    const InputSearchBar = useRef(null);
        setTimeout(
            function() {
                if(InputSearchBar.current){
                    InputSearchBar.current.focus();
                }
            }.bind(this),
            25
        ); 
    
    return(
        <Row className={styles.headerSearchBar}>
            <Col span={3} className={styles.headerSearchBarColButton}>
                <Button ghost type="text" block icon={<FontAwesomeIcon icon={faArrowLeft} />} className={styles.headerSearchBarButton} onClick={()=>setShowSearch.setShowSearch(false)}/>
            </Col>
            <Col span={18} className={styles.headerSearchBarColInput}>
                <Input ref={InputSearchBar} placeholder="Buscar" bordered={false} className={styles.headerSearchBarInput}/>
            </Col>
            <Col span={3} className={styles.headerSearchBarColButton}>
                <Button ghost type="text" block icon={<FontAwesomeIcon icon={faSearch} />} className={styles.headerSearchBarButton} />
            </Col>
        </Row>
    );
}

export default HeaderMobileSearchBar;