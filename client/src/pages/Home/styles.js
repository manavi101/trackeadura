import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  usernameInput: {
  },
  tagInput: {
  },
  root:{
    height:'90vh',
    width:'100%',
  },
  form: {
    display:'flex',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  box: {
    display:'flex',
    direction:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    width:'100%',
    height:'100%'
  }
}))
  
export default useStyles;