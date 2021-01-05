import React from 'react';
import {
  Grid,
  Box,
  InputAdornment
} from '@material-ui/core';
import { Input, Button } from '../../components/FormControls';
import { useForm, Form } from '../../utils/useForm';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const initialValues = {
  username:'',
  tag:''
}

const Home = props => {

  const classes = useStyles();
  const history = useHistory();

  const {
    values, 
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialValues, false)


  const handleSubmit = event => {
    event.preventDefault()
    const { username, tag } = values;
         if(!username && !tag) {
            alert("NO HA INGRESADO NADA")
        } else if (username && !tag) {
            alert("NO HA INGRESADO TAG")
        } else if (!username && tag) {
            alert("NO HA INGRESADO USUARIO")
        } else {
            history.push('profile/'+username+'-'+tag)
        } 
  }


  return(
    <div className={classes.root}>
      <Form onSubmit={handleSubmit} className={classes.form}>
        <Box  className={classes.box} direction="column">
            <Grid item container direction="row" alignItems="center" justify="center" spacing={2}>
              <Grid item>
                <Input
                  name="username"
                  label="Nombre de usuario"
                  value={values.username}
                  onChange={handleInputChange}
                  className={classes.usernameInput}
                />
              </Grid>
              <Grid item>
                <Input
                  name="tag"
                  label="Tag"
                  value={values.tag}
                  onChange={handleInputChange}
                  className={classes.tagInput}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                type="submit"
                text="Buscar"
                className={classes.button}
                onClick={handleSubmit}
                />
              </Grid>
          </Grid>
          <Grid item>
          </Grid>
        </Box>
      </Form>
    </div>
  )
}

export default Home;