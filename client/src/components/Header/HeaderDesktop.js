import React from 'react';
import {Link} from 'react-router-dom'
import {Row,Col,Button,Input,Divider} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faSun,faMoon  } from '@fortawesome/free-solid-svg-icons'
import styles from './HeaderDesktop.module.css';
import StyledButtonText from '../UI/themed-components/ButtonText';

const HeaderDesktop = (props) => {
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
                            <Button ghost type="text" icon={<FontAwesomeIcon icon={faSearch}/>} className={styles.headerSearchBarButton} />
                        </Col>
                    </Row>
                </Col>
            </Col>
            <Col span={6} size="large" className={styles.headerColSignIn}>
                <StyledButtonText onClick={()=>props.themes === "dark"?props.changeTheme("Light"):props.changeTheme("Dark")} className={styles.headerThemeButton}>
                    {props.themes === "dark"?
                        <FontAwesomeIcon icon={faMoon} style={{width:"80%",height:"80%"}}/>
                    :
                        <FontAwesomeIcon icon={faSun} style={{width:"80%",height:"80%"}}/>
                    }
                </StyledButtonText>
                <Button type="text" ghost className={styles.headerSignInButton}>Iniciar Sesion</Button>
            </Col>
        </Row>
    )   
}
//<Switch checkedChildren="Light" unCheckedChildren="Dark" onChange={props.changeTheme} />   


export default HeaderDesktop;
