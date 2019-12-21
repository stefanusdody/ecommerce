import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: theme.spacing(4),
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

 const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h5" component="h6" gutterBottom>
          Hubungi Kami
        </Typography>
        <hr/>
        <Typography variant="subtitle1" color="textSecondary">
          Jam Operasional Kami :
        </Typography>
        <ListItem button>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText>Senin s/d Jumat (08.00 s/d 19.00)</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText>Sabtu (08.00 s/d 15.00)</ListItemText>
        </ListItem>
        <hr/>

          <Typography variant="subtitle1" color="textSecondary">
            Admin kami akan melayani kamu dengan baik
          </Typography>
        <br/>

        <Button
         type="submit"
         fullWidth
         variant="contained"
         color="secondary"
         href="/shop"
         className={classes.submit}
        >
        Contact Kami
       </Button>


      </Container>
    </div>
  );
}

export default ContactUs;
