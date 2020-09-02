import React, {useState,useRef} from 'react';
import {
    Row,
    Col,
    Input,
    Divider,
    Button,
    Form,
    Layout
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './indexHome.module.css';
import {useHistory} from 'react-router-dom';
import StyledRow from '../UI/themed-components/row';

const Home = (props) => {

    //REFS
    const usernameInputRef = useRef(null)
    const tagInputRef = useRef(null)
    //HOOKS
    const history = useHistory()
    const [form] = Form.useForm()
    //STATE
    const [state,setState] = useState({username:'',tagLine:''})

    const handleSubmit = (event) => {
        event.preventDefault()
         if(!state.username && !state.tagLine) {
            alert("NO HA INGRESADO NADA")
        } else if (state.username && !state.tagLine) {
            alert("NO HA INGRESADO TAG")
        } else if (!state.username && state.tagLine) {
            alert("NO HA INGRESADO USUARIO")
        } else {
            history.push('profile/'+state.username+'/'+state.tagLine)
        } 
    }
    
    const handleInputChange = (event) => {
        event.preventDefault()
        let { name, value } = event.target;
        if(name == 'tagLine') {
            value = ("" + value).toUpperCase()
        }
        setState(prevState => ({...prevState, [name]:value}))
    }


    return (
        <StyledRow align="middle" justify="middle" className={styles.background}>
            <Col span={24}>
                <StyledRow align="middle" justify="center" className={styles.title}>
                    Trackeadura
                </StyledRow>
                <Row align="middle" justify="center" > 
                    <Col xs={22} s={18} md={12} className={styles.searchBar}>
                        <Row>
                            <Col span={21} className={styles.searchBarColInput}>
                                    <Input.Group className={styles.searchBarInput}>
                                        <Row>
                                            <Form 
                                                layout="inline" 
                                                form={form}
                                                onSubmit={handleSubmit}
                                            >
                                                <Row gutter={[1,1]}>
                                                    <Col span={8}>
                                                        <Form.Item>
                                                            <Input
                                                                name="username"
                                                                placeholder="Username"
                                                                className={styles.searchBarInputUsername}
                                                                bordered={false}
                                                                value={state.username}
                                                                onChange={handleInputChange}
                                                                ref={usernameInputRef}
                                                                onPressEnter={()=>tagInputRef.current.focus()}
                                                            />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={8} className={styles.tagCol}>
                                                        <Form.Item>
                                                            <Input
                                                                name="tagLine"
                                                                prefix={"#"}
                                                                ref={tagInputRef}
                                                                placeholder="TAG"
                                                                value={state.tagLine}
                                                                onChange={handleInputChange}
                                                                className={styles.searchBarInputTag}
                                                                bordered={false}
                                                                onPressEnter={handleSubmit}
                                                            />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Row>
                                    </Input.Group>
                            </Col>
                            <Col span={1} className={styles.searchBarColDivider}>
                                <Divider type="vertical" className={styles.searchBarDivider}/>
                            </Col>
                            <Col span={2} className={styles.searchBarColButton}>
                                <Button onClick={handleSubmit} ghost type="text" icon={<SearchOutlined />} className={styles.searchBarButton} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </StyledRow>
        
    )
}

export default Home;