import React, {useState, useEffect} from 'react';
import Layout from './layout';
import CardProduct from './card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchItem from './search';
import Container from '@material-ui/core/Container';
import {getProducts} from './apicore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: "center"
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
}))

const Home = () => {
  const classes = useStyles();
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)


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
      <Layout/>
      <br/>
      <div>
      <Container>
      <Typography className={classes.card} gutterBottom variant="h5" component="h1">
         New Arrival
      </Typography>
        <Grid container spacing={2}>
           {productsByArrival.map((product, i) => (
             <Grid  key={i} item xs={12} sm={6} md={4}>
                 <CardProduct
                  product={product}
                  />
             </Grid>
           ))}
        </Grid>
      </Container>
      <br/>
      <Container>
      <hr/>
      <Typography className={classes.card} gutterBottom variant="h5" component="h1">
          Best Seller
      </Typography>
       <Grid container spacing={4}>
          {productsBySell.map((product, i) => (
            <Grid  key={i} item xs={12} sm={6} md={4}>
              <CardProduct
               className={classes.cardSize}
               product={product}
               />
             </Grid>
          ))}
       </Grid>
       </Container>
      </div>
    </div>
  )
}

export default Home;
