import React,{useState,useEffect} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Profile from './components/Profile';

const { Content } = Layout

const App = () => {

  const [valor, setValor] = useState(null)

  useEffect(()=>{
    setValor('Hello world!')
  },[])

  return (
    <Layout>
      <Header/>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Profile/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}


export default App;
