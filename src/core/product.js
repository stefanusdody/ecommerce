import React, {useState, useEffect} from 'react';
import CardProduct from './card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { read, listRelated} from './apicore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: "center",
    marginTop: theme.spacing(6),
  },
  cardRelation: {
    textAlign: "center",
  },
}))

const Product = (props) => {
 const classes = useStyles();

 const [product, setProduct] = useState({})
 const [relatedProduct, setRelatedProduct] = useState([])
 const [error, setError] = useState(false)

 const loadSingleProduct = productId => {
   read(productId).then(data => {
     if(data.error) {
       setError(data.error);
     } else {
       setProduct(data);
       //fetch related products
       listRelated(data._id).then(data => {
         if(data.error) {
           setError(data.error)
         } else {
           setRelatedProduct(data);
         }
       })
     }
   })
 }

 useEffect(() => {
   const productId = props.match.params.productId
   loadSingleProduct(productId)
 }, [props])

 const goBack = () => (
   <Grid container>
     <Grid item>
       <Link href="/shop" variant="body2">
             {"Continue Shopping"}
       </Link>
     </Grid>
   </Grid>
 );

  return(
    <Container>
      <Grid container spacing={4} className={classes.card}>
      {product && product.description && (
        <Grid  item xs={12} sm={12} md={12}>
          <CardProduct product={product} showViewProductButton={false}/>
        </Grid>
       )}
      </Grid>
    <br/>
      {goBack()}
    <br/>
    <Typography className={classes.cardRelation} gutterBottom variant="h5" component="h1">
        Related Product
    </Typography>
     <Grid container spacing={4}>
       {relatedProduct.map((p, i) => (
         <Grid key={i} item xs={12} sm={6} md={6}>
           <CardProduct
             product={p}
             showViewImage= {true}
             showViewImageCarousel={false}
             showViewDescriptions={false}
             showViewCategories={false}
             showAddedProduct={false}
              />
         </Grid>
       ))}
     </Grid>
    </Container>
  );
};

export default Product;
