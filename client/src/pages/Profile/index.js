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
            <Grid container direction="row" alignItems="center" spacing={2} style={{paddingBottom:'16px'}}>
              <Grid item>
                <Avatar/>
              </Grid>
              <Grid item>
                <Typography>parradura#LAS</Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider/>
          <Grid container direction="row" style={{paddingTop:'16px'}}>
            <Grid container xs={6} spacing={2}>
              {stats.map(e => (
                <Grid item container direction="row" spacing={2}>
                  <Grid item>
                    <Typography>{e.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{e.value}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid container xs={6} spacing={2}>
              {stats.map(e => (
                <Grid item container direction="row" spacing={2}>
                  <Grid item>
                    <Typography>{e.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{e.value}</Typography>
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