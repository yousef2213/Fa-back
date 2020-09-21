import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link as LLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {FaConsumer} from '../Context/context'
import Box from '@material-ui/core/Box';

import FaBackLogo from './Fa-back'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://www.facebook.com/profile.php?id=100006110625520">
        Yousef Ayman
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  
  return (
      <FaConsumer>
          {value =>{
              const {
                mess,
                Login
            } = value;

              return(
                <div className="container-fluid">
                  <div className="row">
                    <FaBackLogo />
                    <div className="col-12 col-sm-10 col-md-6 col-lg-6 mx-auto pt-5">
                      <Container className="pt-5" component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                      <form className={classes.form} noValidate>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="Sign-In-Email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="Sign-In-Password"
                          autoComplete="current-password"
                        />
                        <FormControlLabel
                          control={<Checkbox value="remember" color="primary" />}
                          label="Remember me"
                        />
                        <p className="text-danger">{mess}</p>
                        <LLink
                        to='/'
                          className="btn btn-primary w-100 mb-3"
                          onClick={Login}
                        >
                          Sign In
                        </LLink>
                        <Grid container>
                          <Grid item>
                          <LLink to="/SignUp">
                              Don't have an account? Sign Up
                          </LLink>
                          </Grid>
                        </Grid>
                      </form>
                    </div>
                    <Box mt={5}>
                      <Copyright />
                    </Box>
                </Container>
                    </div>
                  </div>
                </div>
              )
          }}
      </FaConsumer>
  );
}