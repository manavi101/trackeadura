import React from 'react';
import {Link} from 'react-router-dom'
import {Row,Col,Button,Input,Divider} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './HeaderDesktop.module.css';

const HeaderDesktop = () => {


    return(
        <Row className={styles.headerRow}>
            <Col span={6} className={styles.headerColLogo}>
                <Link to="/"><h2 className={styles.headerLogo}>Trackeadura</h2></Link>
            </Col>
            <Col span={12} className={styles.headerColSearchBar}>
                <Col className={styles.headerSearchBar}>
                    <Row>
                        <Col span={21} className={styles.headerSearchBarColInput}>
                            <Input placeholder="Buscar" bordered={false} className={styles.headerSearchBarInput}/>
                        </Col>
                        <Col span={1} className={styles.headerSearchBarColDivider}>
                            <Divider type="vertical" className={styles.headerSearchBarDivider}/>
                        </Col>
                        <Col span={2} className={styles.headerSearchBarColButton}>
                            <Button ghost type="text" icon={<SearchOutlined />} className={styles.headerSearchBarButton} />
                        </Col>
                    </Row>
                </Col>
            </Col>
            <Col span={6} size="large" className={styles.headerColSignIn}>    
                <Button type="text" ghost className={styles.headerSignInButton}>Iniciar Sesion</Button>
            </Col>
        </Row>
    )   
}



export default HeaderDesktop;
