import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CreateIcon from '@material-ui/icons/Create';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MoreIcon from '@material-ui/icons/MoreVert';
import PaymentIcon from '@material-ui/icons/Payment';
import StoreIcon from '@material-ui/icons/Store';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ListItemText from '@material-ui/core/ListItemText';
import {signout, isAuthenticated } from '../auth/index';
import {itemTotal} from './carthelpers';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  img: {
    width: "20%",
  },
}));


const PrimarySearchAppBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { user } = isAuthenticated()

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
         <IconButton aria-label="show Home" color="inherit">
            <HomeIcon />
         </IconButton>
         <Link color="inherit"variant="body2" className={classes.link} href="/" >
           <ListItemText>Home</ListItemText>
         </Link>
      </MenuItem>


      <MenuItem>
        <IconButton aria-label="show Trip Schedule" color="inherit">
            <StoreIcon />
        </IconButton>
          <Link color="inherit"variant="body2" className={classes.link} href="/shop" >
             <ListItemText>Shop</ListItemText>
          </Link>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

           <IconButton aria-label="show Home" color="inherit">
            <Badge className={classes.margin} color="primary">
              <Link color="inherit"variant="body2" className={classes.link} href="/" >
                <Typography className={classes.title} component="p">
                 Home
                </Typography>
              </Link>
            </Badge>
           </IconButton>


            <IconButton aria-label="show Trip Schedule" color="inherit">
              <Link color="inherit"variant="body2" className={classes.link} href="/shop" >
                  <Typography className={classes.title} component="p">
                   Shop
                  </Typography>
              </Link>
            </IconButton>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default PrimarySearchAppBar;
