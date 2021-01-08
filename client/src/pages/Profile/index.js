import React from 'react';
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Divider
} from '@material-ui/core';
import useStyles from './styles';

const stats = [
  {
    title:'KDA',
    value: '2.07'
  },
  {
    title:'HS%',
    value: '30.8'
  },
  {
    title:'Econ. Score',
    value: '98'
  },
  {
    title:'Dmg/round',
    value: '132'
  },
  {
    title:'Combat Score',
    value: '357'
  },
]

const Profile = props => {

  const classes = useStyles();

  const userBox = props => {
    return(
      <Card>
          <Grid container direction="row" alignItems="center" className={classes.userContainer}>
            <Grid item style={{padding:12}}>
              <Avatar src={process.env.PUBLIC_URL + '/images/profile/generic-profile-icon.png'} className={classes.userImage}/>
            </Grid>
            <Grid item>
              <Typography className={classes.userName}>parradura#LAS</Typography>
            </Grid>
          </Grid>
        <CardContent>
          <Box>
            <Grid container className={classes.rankContainer} direction="row">
              <Grid item style={{padding:12}}>
                <Avatar src={process.env.PUBLIC_URL + '/images/ranks/immortal3.svg'} className={classes.rankImage}/>
              </Grid>
              <Grid item>
                <Typography className={classes.rankName}>Immortal 3</Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider/>
          <Grid container direction="row" style={{paddingTop:'16px'}} spacing={4}>
            <Grid item container xs={6} spacing={2}>
              {stats.map(e => (
                  <Grid item container direction="row" spacing={2}>
                    <Grid item xs={8}>
                      <Typography className={classes.statTitle}>{e.title}</Typography>
                    </Grid>
                    <Grid item xs={4} justify="flex-end" style={{display:'flex'}}>
                      <Typography className={classes.statValue}>{e.value}</Typography>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
            <Grid item container xs={6} spacing={2}>
              {stats.map(e => (
                <Grid item container direction="row" spacing={2}>
                  <Grid item xs={8}>
                    <Typography className={classes.statTitle}>{e.title}</Typography>
                  </Grid>
                  <Grid item xs={4} justify="flex-end" style={{display:'flex'}}>
                    <Typography className={classes.statValue}>{e.value}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>      
    )
  }

  const mostUsedAgents = props => {
    return(
      <Grid item>
        <Card className={classes.mostUsedAgentsContainer}>
          <Grid item xs={3} className={classes.mostUsedAgentsTitleContainer}>
            <Typography align="center" className={classes.mostUsedAgentsTitle}>PERSONAJES MAS JUGADOS</Typography>
          </Grid>
          <Grid item xs={9} container className={classes.agentsContainer}>
              <Grid item className={classes.agent}>
                <Avatar src={process.env.PUBLIC_URL + '/images/agents/jett-concept-headshot.png'} className={classes.userImage}/>
                <Typography className={classes.agentName}>Jett</Typography>
              </Grid>
              <Grid item className={classes.agent}>
                <Avatar src={process.env.PUBLIC_URL + '/images/agents/jett-concept-headshot.png'} className={classes.userImage}/>
                <Typography className={classes.agentName}>Jett</Typography>
              </Grid>
              <Grid item className={classes.agent}>
                <Avatar src={process.env.PUBLIC_URL + '/images/agents/jett-concept-headshot.png'} className={classes.userImage}/>
                <Typography className={classes.agentName}>Jett</Typography>
              </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }

  const matchHistory = props => {
    return(
      <Grid item>
        <Card>
          <Grid item className={classes.matchHistoryTitleContainer}>
            <Typography align="center" className={classes.matchHistoryTitle}>HISTORIAL PARTIDAS</Typography>
          </Grid>
          <CardContent>
              <Grid container direction="column" spacing={2} style={{paddingTop:'24px'}}>
                {(()=>{
                  let matches = []
                  for(let i=0; i<50; i++){
                    matches.push(
                      matchItem()
                    )
                    matches.push(<Divider/>)
                  }
                  return matches;
                })()}
              </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  const matchItem = props => {
    return(
      <Grid item container direction="row" alignItems="center">
        <Grid item xs={2}>
          <Avatar variant="rounded" src={process.env.PUBLIC_URL + '/images/maps/map-art-haven.jpg'} className={classes.mapImage}/>
        </Grid>
        <Grid item xs={10} className={classes.mapItemStatsContainer}>
          <Typography>Bind</Typography>
          <Typography>13-10</Typography>
          <Typography>2.48KD</Typography>
          <Typography>328</Typography>
        </Grid>
      </Grid>
    );
  }

  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Box height="100vh" className={classes.cardRoot}>
            {userBox()}
          </Box>
        </Grid>
        <Grid item container xs={9}>
          <Box height="100vh" width="100%" className={classes.cardRoot}>
            <Grid container direction="column" spacing={2}>
              {mostUsedAgents()}
              {matchHistory()}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile;