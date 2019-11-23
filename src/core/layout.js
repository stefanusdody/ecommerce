import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../App.css';

const useStyles = makeStyles(theme => ({
  button: {
   margin: theme.spacing(1),
 },
 input: {
   display: 'none',
 },
  mainFeaturedPost: {
    position: 'relative',
    marginTop: "80px",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },

}));


const Layout = ({item, url}) => {
  const classes = useStyles();

  return (
    <Container >
      <Paper className={classes.mainFeaturedPost}>
         {/* Increase the priority of the hero background image */}
         {
           <img
             style={{ display: 'none' }}
             src="https://source.unsplash.com/user/erondu"
             alt="background"
           />
         }
         <div className={classes.overlay} />
         <Grid container>
           <Grid item md={6}>
             <div className={classes.mainFeaturedPostContent}>
               <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Daily Catering
               </Typography>
               <Typography variant="h5" color="inherit" paragraph>
                 Choice You Favourite Menu Everyday
               </Typography>
               <Button variant="outlined" color="inherit" href="/shop" className={classes.button}>
                  Cek Menu
               </Button>
             </div>
           </Grid>
         </Grid>
       </Paper>
    </Container>
  )
}

export default Layout;
