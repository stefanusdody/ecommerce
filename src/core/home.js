import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Layout from './layout';
import CardProduct from './card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchItem from './search';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import StickyFooter from './footer';
import Paper from '@material-ui/core/Paper';
import {getProducts} from './apicore';
import { makeStyles } from '@material-ui/core/styles';

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
  card: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  cardseller: {
    textAlign: "center",
    marginTop: theme.spacing(1),
  },
  cardGrid: {
    marginTop: theme.spacing(10),
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  copyright: {
    textAlign: 'center'
  },
}))

const Home = () => {
  const classes = useStyles();
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setProductsBySell(data)
      }
    })
  }

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setProductsByArrival(data)
      }
    })
  }

  useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()
  }, [])


  return (
    <div>
      <div>
      <Container>
      <Typography className={classes.card} gutterBottom variant="h5" component="h1">
        New Products
      </Typography>
        <Grid container spacing={2}>
           {productsByArrival.map((product, i) => (
             <Grid  key={i} item xs={12} sm={12} md={3}>
                 <CardProduct
                  product={product}
                  showViewProductButton={true}
                  showViewAddCart={false}
                  showDetailProduct={false}
                  />
             </Grid>
           ))}
        </Grid>
      </Container>

      <Container>
      <Typography className={classes.card} gutterBottom variant="h5" component="h1">
        Best Seller
      </Typography>
        <Grid container spacing={2}>
           {productsBySell.map((product, i) => (
             <Grid  key={i} item xs={12} sm={12} md={3}>
                 <CardProduct
                  product={product}
                  showViewProductButton={true}
                  showViewAddCart={false}
                  showDetailProduct={false}
                  />
             </Grid>
           ))}
        </Grid>
      </Container>

      </div>
      <Box mt={5} className={classes.copyright}>
        <Copyright />
      </Box>
    </div>
  )
}

export default Home;
