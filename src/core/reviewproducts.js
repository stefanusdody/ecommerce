import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

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

 const ReviewProducts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h5" component="h6" gutterBottom>
          Ulasan Product
        </Typography>
        <hr/>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Andri</Typography>
          <Rating name="read-only" value={4} readOnly/>
          <Typography component="legend">
            Bahan T-Shirt Adem dan nyaman, hasil printing gambar bagus sesuai dengan ekspetasi..recommended banget
          </Typography>
        </Box>
        <hr/>
        <Grid item>
           <Link href="/shop" variant="body2">
             {"Belanja Sekarang"}
           </Link>
        </Grid>
      </Container>
    </div>
  );
}

export default ReviewProducts;
