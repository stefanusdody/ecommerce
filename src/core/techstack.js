import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  tech: {
    marginTop: theme.spacing(8),
    textAlign: "center"
  },
  img: {
    width: "100%",
    marginRight: theme.spacing(1),
  },
}));

const TechStack = () => {
  const classes = useStyles();
  return (
    <div className={classes.tech}>
    <Typography className={classes.card} gutterBottom variant="h5" component="h1">
       This Web App Was Built Using Technology
    </Typography>
     <Grid  item xs={12} sm={12} md={12}>
       <img src={require('../assets/frontend.png')} className={classes.img} alt=""/>
     </Grid>
     <br/>
     <Grid  item xs={12} sm={12} md={12}>
       <img src={require('../assets/backend.png')} className={classes.img} alt=""/>
     </Grid>
     <br/>
     <Grid  item xs={12} sm={12} md={12}>
       <img src={require('../assets/deployment.png')} className={classes.img} alt=""/>
     </Grid>
    </div>
  );
}

export default TechStack;
