import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {Redirect} from "react-router-dom";
import { blue } from '@material-ui/core/colors';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShowImage from './showimage';
import moment from 'moment';
import {addItem, updateItem, removeItem} from './carthelpers';
import {isAuthenticated} from '../auth'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  rootRating: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
  likes: {
    marginTop: theme.spacing(0),
  }
}));


const CardProduct = ({
      product,
      showViewAddCart = true,
      showViewProductButton = true,
      showViewDescriptions = true,
      showViewCategories = true,
      showDetailProduct = true,
      cartUpdate= false,
      showRemoveProductButton=false
    }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [redirect , setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [state, setState] = useState({
    open: true
  })
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickButton = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if(redirect) {
      return <Redirect to="/cart"/>
    }
  }

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
          <Button href={`/product/${product._id}`} size="small">Lihat Detail</Button>
      )
    );
  };

  const showToDetailProduct = (showDetailProduct) => {
    return (
      showDetailProduct && (
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      )
    );
  };

  const showAddToChartButton = (showViewAddCart) => {
    return (
      showViewAddCart && (
        <Button  size="small" onClick={addToCart} color="secondary">
           Add To Chart
        </Button>
      )
    );
  };


const showStock = (quantity) => {
    return quantity > 0 ?
      <Typography variant="body2" color="textSecondary" component="p" className={classes.quantity}>
        Stock : {product.quantity} Pcs
      </Typography>
      :
      <Typography variant="body2" color="Secondary" component="p" className={classes.quantity}>
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

  const showNext = () => {
    return isAuthenticated() ? (
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    ):(
      <Button
        type="submit"
        fullWidth
        size="small"
        href="/signin"
        color="secondary">
        Sign In to See
      </Button>
    )
  }

return (
    <Grid>
    <Card className={classes.root}>
    <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <FastfoodIcon />
          </Avatar>
        }

        title={product.name}
        subheader={moment(product.createdAt).fromNow()}
      />

         {shouldRedirect(redirect)}
     <ShowImage item={product} url="product"/>
     <CardContent>
     <Typography variant="body2" color="textSecondary" component="p" className={classes.quantity}>
       Stock : {product.quantity} Pcs
     </Typography>
          {cartShowCartUpdateOptions(cartUpdate)}
          {showRemoveButton(showRemoveProductButton)}
      </CardContent>

      <CardActions>
        {showViewButton(showViewProductButton)}
        {showAddToChartButton(showViewAddCart)}
        {showToDetailProduct(showDetailProduct)}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Nama Product:</Typography>
        <Typography paragraph>
          {product.name}
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">Harga:</Typography>
          <Typography paragraph>
            Rp {product.price}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">Warna:</Typography>
          <Typography paragraph>
           {product.color}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">Tersedia Ukuran:</Typography>
          <Typography paragraph>
            {product.schedule}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
             Deskripsi:
          </Typography>
          <Typography paragraph>
            {product.description.substring(0,1000)}
          </Typography>

        </CardContent>
      </Collapse>
      </Card>
    </Grid>
    );
}

export default CardProduct;
