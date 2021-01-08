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
    //paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  userImage: {
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  userName: {
    fontWeight:'600',
    fontSize:'24px',
    color:'#fff'
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
  userContainer:{
    display:'flex',
    alignItems:'center',
    background: 'linear-gradient(45deg, #9778ce 30%, #7c88cc 90%)',
    padding:'8px', 
    paddingTop:'20px',
    paddingBottom:'20px'
  },
  mostUsedAgentsContainer: {
    display:'flex',
    flexDirection:'row',
  },
  mostUsedAgentsTitleContainer: {
    display:'flex',
    background: 'linear-gradient(45deg, #9778ce 30%, #7c88cc 90%)',
    alignItems:'center',
    justifyContent:'center'
  },
  mostUsedAgentsTitle: {
    fontWeight:'600',
    fontSize:'20px',
    color:'#fff'
  },
  agentsContainer: {
    display:'flex',
    padding:'8px', 
    paddingTop:'20px',
    paddingBottom:'20px',
    justifyContent:'space-around'
  },
  agent: {
    display: 'flex',
    flexDirection:'row',
    padding:'12px',
    alignItems:'center'
  },
  matchHistoryTitleContainer : {
    display:'flex',
    background: 'linear-gradient(45deg, #9778ce 30%, #7c88cc 90%)',
    alignItems:'center',
    justifyContent:'center',
    padding:'20px'
  },
  matchHistoryTitle: {
    fontWeight:'600',
    fontSize:'20px',
    color:'#fff'
  },
  agentName: {
    paddingLeft:'10px',
    fontWeight:'600',
    fontSize:'18px'
  },
  mapImage: {
    height: theme.spacing(15),
    width: theme.spacing(15),
  },
  mapItemStatsContainer: {
    display: 'flex',
    padding:'24px',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
}))

export default useStyles;