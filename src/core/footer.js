import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { createSubscription } from './apicore';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Tukuada.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
   },
   copyright: {
     textAlign: 'center'
   },
   img: {
     width: "50%"
   },
   sosmed: {
     marginLeft: "10%",
     fontSize: 50
   }
}));

const StickyFooter = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    error: "",
    success: false
  })

  const {email, error, success } = values

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false});
    createSubscription({ email }).then(data => {
      if(data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          email: "",
          error: "",
          success: true
        });
      }
    })
  };


  return (
    <div  className={classes.root}>
    <Container>
      <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
               <Typography href="#" variant="subtitle1" color="textSecondary">
                TokoTukuAda.com menyediakan sejumlah bahan makanan terkini untuk kebutuhan kamu setiap hari.
               </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                ANDA BARU di TokoTukuAda.com?
              </Typography>
              <Typography href="#" variant="subtitle1" color="textSecondary">
               Dapatkan Promo Menarik (ditambah dengan berita makanan terbaru) hanya dengan berlangganan newsletter kami.
              </Typography>
             <br/>
              <Typography href="#" variant="subtitle1" color="textSecondary">
               Alamat email Kamu
              </Typography>
              <form>
                <TextField
                 variant="outlined"
                 margin="normal"
                 required
                 fullWidth
                 id="email"
                 label="Email Address"
                 name="email"
                 autoComplete="email"
                 autoFocus
                 value={email}
                 onChange={handleChange("email")}
                />
                <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 color="primary"
                 className={classes.submit}
                 onClick={clickSubmit}
                >
                Submit
                </Button>
             </form>
          </Grid>

      </Grid>

      <Box mt={5} className={classes.copyright}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

export default StickyFooter;
