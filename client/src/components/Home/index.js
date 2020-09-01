import React, {useEffect,useState,useRef} from 'react';
import {
    Row,
    Col,
    Input,
    Divider,
    Button,
    Form
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './indexHome.module.css';
import {useHistory} from 'react-router-dom';

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
            history.push(state.username+'/'+state.tagLine)
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
        <Row align="middle" justify="center" className={styles.background}>
            <Col span={24}>
                <Row align="middle" justify="center">
                    <h1 className={styles.title}>Trackeadura</h1>
                </Row>
                <Row gutter={10,10} align="middle" justify="center" > 
                <Col span={12} className={styles.colSearchBar}>
                <Col className={styles.searchBar}>
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
                                                            className={styles.searchBarInput}
                                                            bordered={false}
                                                            value={state.username}
                                                            onChange={handleInputChange}
                                                            ref={usernameInputRef}
                                                            onPressEnter={()=>tagInputRef.current.focus()}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={8}>
                                                    <Form.Item>
                                                        <Input
                                                            name="tagLine"
                                                            //prefix={"#"}
                                                            ref={tagInputRef}
                                                            placeholder="#TAG"
                                                            autoCapitalize={true}
                                                            value={state.tagLine}
                                                            onChange={handleInputChange}
                                                            className={styles.searchBarInput}
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
            </Col>
                </Row>
            </Col>
        </Row>
        
    )
}

export default Home;