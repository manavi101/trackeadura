import React, {useRef} from 'react';
import {Row,Col,Button,Input} from 'antd';
import { SearchOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import styles from './HeaderMobileSearchBar.module.css';

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
                <Button ghost type="text" block icon={<ArrowLeftOutlined />} className={styles.headerSearchBarButton} onClick={()=>setShowSearch.setShowSearch(false)}/>
            </Col>
            <Col span={18} className={styles.headerSearchBarColInput}>
                <Input ref={InputSearchBar} placeholder="Buscar" bordered={false} className={styles.headerSearchBarInput}/>
            </Col>
            <Col span={3} className={styles.headerSearchBarColButton}>
                <Button ghost type="text" block icon={<SearchOutlined />} className={styles.headerSearchBarButton} />
            </Col>
        </Row>
    );
}

export default HeaderMobileSearchBar;