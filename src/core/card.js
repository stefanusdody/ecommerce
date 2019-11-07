import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
import ShowImage from './showimage';
import moment from 'moment';
import {addItem, updateItem, removeItem} from './carthelpers';


const useStyles = makeStyles(theme => ({
  cardGrid: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    textAlign: "center",
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(-10),
  },
  text: {
    textAlign: "Left",
  },
  textProduct: {
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(3),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

const CardProduct = ({
      product,
      showViewAddCart = true,
      showViewProductButton = true,
      showViewDescriptions = true,
      showViewCategories = true,
      showAddedProduct= true,
      cartUpdate= false,
      showRemoveProductButton=false
    }) => {

  const classes = useStyles();
  const [redirect , setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [state, setState] = useState({
    open: true
  })



  const showViewCat = (showViewCategories) => {
    return(
      showViewCategories && (
        <div>
        <Typography variant="body2" color="textSecondary" component="p">
           Category :
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           {product.category && product.category.name}
        </Typography>
        </div>
      )
    )
  }

  const showViewDesc = (showViewDescriptions) => {
    return(
      showViewDescriptions && (
        <div>
        <Typography gutterBottom variant="body2" color="textSecondary" component="p" >
           Description Product :
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           {product.description.substring(0,1000)}}
        </Typography>
        </div>
      )
    )
  }

  const showViewButton = (showViewProductButton) => {
    return(
      showViewProductButton && (
        <Button size="small" color="primary" href={`/product/${product._id}`}>
          Details
       </Button>
      )
    )
  }

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true)
    })
  }

  const shouldRedirect = redirect => {
    if(redirect) {
      return <Redirect to="/cart"/>
    }
  }

  const showAddToChartButton = (showViewAddCart) => {
    return(
      showViewAddCart && (
        <Button fullWidth onClick={addToCart} size="small" color="secondary" href="/cart">
          Buy
        </Button>
      )
    );
  };

  const showAddProduct = (showAddedProduct) => {
    return(
      showAddedProduct && (
        <div>
            <Typography variant="body2" color="textSecondary" component="p">
               Added on {moment(product.createdAt).fromNow()}
            </Typography>
        </div>
      )
    )
  }

  const showStock = (quantity) => {
    return quantity > 0 ?
      <Typography variant="body2" color="textSecondary" component="p">
          Seat Available : {product.quantity} persons
      </Typography>
      :
      <Typography variant="body2" color="textSecondary" component="p">
         Sold Out
      </Typography>

  }

  const showRemoveButton = (showRemoveProductButton) => {
    return(
      showRemoveProductButton && (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          fullWidth
          onClick={() => removeItem(product._id)}
          size="small"
          color="secondary"
          href="/cart"
        >
          Remove
        </Button>
      )
    );
  };

  const cartShowCartUpdateOptions = (cartUpdate) => {
    return(
      cartUpdate && (
        <div className="input-group mb-3">
             <TextField
              id="outlined-number"
              label="Booking For Persons "
              fullWidth
              value={count}
              onChange={handleChange(product._id)}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />
       </div>
      )
    )
  }

  const handleChange = productId => event => {
    setCount(event.target.value < 1 ? 1 : event.target.value)
    if(event.target.value >= 1) {
      updateItem(productId, event.target.value)
    }
  }

return (
    <Grid>
      <Card className={classes.cardGrid}>
        <ShowImage item={product} url="product"/>
        <CardContent className={classes.textProduct}>

          <Typography gutterBottom variant="h5" component="p">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p" >
             Schedule :
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {product.schedule}
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
             Price :
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Rp {product.price} / person
          </Typography>
          <br/>
           {showStock(product.quantity)}
           <br/>
           {showViewCat(showViewCategories)}
           {cartShowCartUpdateOptions(cartUpdate)}
           <br/>
           {showViewDesc(showViewDescriptions)}
           <br/>
           {showAddProduct(showAddedProduct)}
           {showRemoveButton(showRemoveProductButton)}
        </CardContent>
        <CardActions>
            {showViewButton(showViewProductButton)}
            {showAddToChartButton(showViewAddCart)}
        </CardActions>
      </Card>
    </Grid>
    );
}

export default CardProduct;
