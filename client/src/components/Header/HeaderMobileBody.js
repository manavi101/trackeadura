import React from 'react';
import {Link} from 'react-router-dom'
import {Row,Col,Button} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faSun,faMoon  } from '@fortawesome/free-solid-svg-icons'
import StyledButtonText from '../UI/themed-components/ButtonText';
import styles from './HeaderMobileBody.module.css';

const HeaderMobileBody = (props) => {
    return(
        <Row className={styles.headerRow}>
            <Col span={12} className={styles.headerColLogo}>
                <Link to="/"><h2 className={styles.headerLogo}>Trackeadura</h2></Link> 
            </Col>
                <Col span={8} className={styles.headerSearchBarColAppearButton}>
                    <StyledButtonText className={styles.headerIconButton} onClick={()=>props.setShowSearch(true)}>
                        <FontAwesomeIcon icon={faSearch} style={{width:"80%",height:"80%"}}/>
                    </StyledButtonText>
                    <StyledButtonText onClick={()=>props.themes === "dark"?props.changeTheme("Light"):props.changeTheme("Dark")} className={styles.headerIconButton}>
                        {props.themes === "dark"?
                            <FontAwesomeIcon icon={faMoon} style={{width:"80%",height:"80%"}}/>
                        :
                            <FontAwesomeIcon icon={faSun} style={{width:"80%",height:"80%"}}/>
                        }
                    </StyledButtonText>
                </Col>
            <Col span={4} size="large" className={styles.headerColSignIn}>    
                <Button type="text" ghost className={styles.headerSignInButton}><p style={{margin:"0px"}}>Iniciar</p><p style={{margin:"0px"}}>Sesion</p></Button>
            </Col>
        </Row>  
    ); 
}

export default HeaderMobileBody;