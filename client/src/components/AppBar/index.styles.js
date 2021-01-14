import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.type == 'dark'? '#333' : '#ededed',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color:theme.palette.type == 'dark' ? '#fff' : theme.palette.primary.main,
    fontWeight:'bold',
  }
}))

export default useStyles;