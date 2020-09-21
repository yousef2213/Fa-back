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
import {FaConsumer} from '../Context/context';
import Imgs_default from '../images/imgs-default.png';
import Box from '@material-ui/core/Box';

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
                handelChange,
                SignInUser,
                mess,
                returnSignin
            } = value;
                return(
                    <div className="container-fluid">
                        <div className="row">
                            <div className="d-none d-md-block col-12 col-sm-10 col-md-6 col-lg-6 mx-auto position-relative">
                                <div className="Sign-up">
                                    <img src={Imgs_default} className="personal-img" id="Src" alt="Personal Img" />
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="image_uploads">Chosse Your Image</label>
                                            <input 
                                            type="file" 
                                            onChange={handelChange}
                                            id="image_uploads" 
                                            name="image_uploads" 
                                            accept=".jpg, .jpeg, .png" 
                                            multiple 
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-sm-10 col-md-6 col-lg-6 mx-auto pl-0 pt-5">
                                <Container component="main" maxWidth="xs">
                                    <CssBaseline />
                                    <div className={classes.paper}>
                                    <form className={classes.form} noValidate>
                                        <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="phone"
                                            label="phone"
                                            type="number"
                                            id="Phone"
                                            autoComplete="current-password"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="Email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="Password"
                                            autoComplete="current-password"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I want to receive inspiration, marketing promotions and updates via email."
                                            />
                                        </Grid>
                                        </Grid>
                                        <p className="text-danger">{mess}</p>
                                        <LLink
                                            to='/'
                                            color="primary"
                                            className='btn btn-primary w-100 mb-3'
                                            onClick={SignInUser}
                                        >
                                        Sign Up
                                        </LLink>
                                        <Grid container justify="flex-end">
                                        <Grid item>
                                            <LLink to='/' variant="body2" onClick={returnSignin}>
                                            Already have an account? Sign in
                                            </LLink>
                                        </Grid>
                                        </Grid>
                                    </form>
                                    </div>
                                    <Box my={5}>
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