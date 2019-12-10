import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SendIcon from '@material-ui/icons/Send';
import {Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
import ShowImage from './showimage';
import moment from 'moment';
import {addItem, updateItem, removeItem} from './carthelpers';
import {isAuthenticated} from '../auth'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
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
  quantity: {
    textAlign: "center"
  },
}));

const CardProduct = ({
      product,
      showViewAddCart = true,
      showViewProductButton = true,
      showViewDescriptions = true,
      showViewCategories = true,
      cartUpdate= false,
      showRemoveProductButton=false
    }) => {

  const classes = useStyles();
  const [redirect , setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const [state, setState] = useState({
    open: true
  })
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    return (
      showViewAddCart && (
        <Button fullWidth onClick={addToCart} size="small" color="secondary" href="/cart">
         <ListItem button>
           <ListItemIcon>
             <WhatsAppIcon  />
           </ListItemIcon>
          <ListItemText primary="Order" />
          </ListItem>
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
      <Typography variant="body2" color="textSecondary" component="p" className={classes.quantity}>
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
    <Card className={classes.card}>
     <ShowImage item={product} url="product"/>
     <CardContent>
          {cartShowCartUpdateOptions(cartUpdate)}
          {showRemoveButton(showRemoveProductButton)}
      </CardContent>
      <CardActions disableSpacing>
          {showAddToChartButton(showViewAddCart)}
          {showNext()}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Nama Product:</Typography>
        <Typography paragraph>
          {product.name}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
           Cara ORDER :
        </Typography>
        <List>
           <ListItem button>
           <ListItemIcon>
             <SendIcon />
           </ListItemIcon>
           <ListItemText primary="Klik Tombol ORDER" />
         </ListItem>

         <ListItem button>
           <ListItemIcon>
             <SendIcon />
           </ListItemIcon>
           <ListItemText>
            Ketik : {product.name}
           </ListItemText>
         </ListItem>
       </List>

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


          <Typography variant="body2" color="textSecondary" component="p">
            Added on {moment(product.createdAt).fromNow()}
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </Grid>
    );
}

export default CardProduct;
