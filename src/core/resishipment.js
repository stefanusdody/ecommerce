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
import SendIcon from '@material-ui/icons/Send';
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
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

 const ResiShipment = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h5" component="h6" gutterBottom>
          Cek Resi Pengiriman
        </Typography>

        <Typography href="#" variant="subtitle1" color="textSecondary">
          Terima kasih telah berbelanja di TokoTukuAda! Kamu Dapat mengecek Status Pengiriman Order kamu dengan memasukan No. Resi Pada Link dibawah ini
        </Typography>
        <br/>
        <Button
         type="submit"
         fullWidth
         variant="contained"
         color="secondary"
         href="http://bit.ly/JNE-Tracking"
         className={classes.submit}
        >
         Cek Resi Pengiriman
        </Button>
      </Container>
    </div>
  );
}

export default ResiShipment;
