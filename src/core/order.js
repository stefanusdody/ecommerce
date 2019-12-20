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
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

 const Order = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h5" component="h6" gutterBottom>
          Cara Order Product
        </Typography>
        <Typography href="#" variant="subtitle1" color="textSecondary">
          Berikut ini ada cara untuk melakukan order product di TokoTukuAda.com :
        </Typography>

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText>Pilih "Shop" pada pilihan navigasi</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText>Pilih Product Pilihan kamu dengan cara mengetik nama produk di kolom search "Search" atau juga bisa memilih sesuai "Category Product" di Sidebar</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText>Setelah menemukan produk pilihan kamu bisa menekan tombol "Order"</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText>Kamu akan segera terhubung dan dilayani oleh admin kami melalui WhatsApp</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText>Untuk Pemesanan Kamu cukup ketik nama produk pilihan kamu, contoh : Ketik "T-Shirt Indonesia Red"</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText>Admin kami akan melayani kamu dengan baik</ListItemText>
        </ListItem>
        <hr/>
        <Typography variant="h5" component="h6" gutterBottom>
          Siap untuk berbelanja?
        </Typography>
        <Button
         type="submit"
         fullWidth
         variant="contained"
         color="secondary"
         href="/shop"
         className={classes.submit}
        >
        Belanja Sekarang
       </Button>


      </Container>
    </div>
  );
}

export default Order;
