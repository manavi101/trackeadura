import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    height:'100%',
  },
  banner: {
    height:100,
    width:'100%'
  },
  rankContainer: {
    display:'flex',
    alignItems:'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  userImage: {
    height: theme.spacing(7),
    width: theme.spacing(7),
  },
  userName: {
    fontWeight:'500',
    fontSize:'22px'
  },
  rankImage: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    background:'#00000088'
  },
  rankName: {
    fontWeight:'600',
    fontSize:'22px',
    color:'#cf1757'
  },
  cardRoot: {
    padding: theme.spacing(2)
  },
  statTitle: {
    fontWeight:'600'
  },
}))

export default useStyles;