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
        <CardMedia
          className={classes.banner}
          image="https://esports.as.com/2020/06/04/valorant/grupos-Twitch-Rivals-Valorant_1361283862_403051_1440x600.jpg"
          title="banner"
        />
        <CardContent>
          <Box>
            <Grid container direction="row" alignItems="center" spacing={4} style={{padding:'8px', paddingBottom:'24px'}}>
              <Grid item>
                <Avatar src={process.env.PUBLIC_URL + '/images/profile/generic-profile-icon.png'} className={classes.userImage}/>
              </Grid>
              <Grid item>
                <Typography className={classes.userName}>parradura#LAS</Typography>
              </Grid>
            </Grid>
            <Divider/>
            <Grid container className={classes.rankContainer} direction="row" spacing={2}>
              <Grid item>
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
              <Grid item>
                <Card>
                  <CardContent>
                    <Typography>PERSONAJES MAS JUGADOS</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card>
                  <CardContent>
                    <Typography>HISTORIAL PARTIDAS</Typography>
                      <Grid container direction="column" spacing={2} style={{paddingTop:'24px'}}>
                        {(()=>{
                          let matches = []
                          for(let i=0; i<50; i++){
                            matches.push(
                              <Grid item container direction="row" spacing={2} alignItems="center">
                                <Grid item>
                                  <Avatar/>
                                </Grid>
                                <Grid item>
                                  <Typography>Bind | 13-10 | kda:3.50</Typography>
                                </Grid>
                              </Grid>
                            )
                            matches.push(<Divider/>)
                          }
                          return matches;
                        })()}
                      </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile;