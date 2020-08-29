import React,{useState,useEffect} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import HeaderComponent from './components/Header';
import Profile from './components/Profile';

const { Header,Content } = Layout

const App = () => {

  const [valor, setValor] = useState(null)

  useEffect(()=>{
    setValor('Hello world!')
  },[])

  return (
    <Layout>
      <Header style={styles.header}>
        <HeaderComponent/>
      </Header>
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

const styles = {
  header: {
    backgroundColor:'#0c365f',

  }
}

export default App;
