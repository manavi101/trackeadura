import React,{useState,useEffect} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
<<<<<<< HEAD
import HeaderComponent from './components/header/header';
import Profile from './components/profile';
=======
import HeaderComponent from './components/header';
import Profile from './components/Profile';
>>>>>>> 89149b8c5090ffc68bccd7137ed06d75b49827db
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header,Sider,Content,Footer } = Layout

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
