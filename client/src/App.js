import React,{useState,useEffect} from 'react';
import {Layout,Image} from 'antd';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Profile from './components/Profile';
import {useDispatch,useSelector} from 'react-redux';

const { Content } = Layout

const App = () => {

  const dispatch = useDispatch()
  const value = useSelector(state => state.profileReducer.profileData)
  const [valor, setValor] = useState(null)

  useEffect(()=>{
    console.log('value',value)
  },[])

  return (
    <Layout>
      <Header/>
      <Layout >
        <Layout style={styles.backgroundImage}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor:"rgba(11, 0, 31, 0.75)"
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

const styles = {
  backgroundImage:{
    backgroundImage:"url(" + "https://blitz-cdn.blitz.gg/blitz/val/AgentSilhouettes.png " + ")" ,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    //padding: '0 24px 24px' 
  }
}
