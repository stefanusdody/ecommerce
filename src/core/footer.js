import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

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
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
   },
   copyright: {
     textAlign: 'center'
   },
   sociamedia: {
     marginLeft: theme.spacing(4),
     width: "50px"
   },
   img: {
     width: "50%"
   }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={require('../assets/fontlogo.png')} className={classes.img} alt=""/>
               <Typography href="#" variant="subtitle1" color="textSecondary">
                TokoTukuAda.com menyediakan sejumlah fashion terkini dengan tema ALL ABOUT SPORTS untuk melengkapi gaya SPORTY kamu setiap hari.
               </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              LAYANAN
            </Typography>

              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Cara Order
                </Link>
              </li>

              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Informasi Ukuran Baju
                </Link>
              </li>

               <li>
                 <Link href="#" variant="subtitle1" color="textSecondary">
                   Konfirmasi Pembayaran
                 </Link>
               </li>

               <li>
                 <Link href="#" variant="subtitle1" color="textSecondary">
                   Proses Pengiriman
                 </Link>
               </li>

                <li>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    Cek Resi Pengiriman
                  </Link>
                </li>

                <li>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    Prosedur Pengembalian
                  </Link>
                </li>

                <li>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    Hubungi Kami
                  </Link>
                </li>

          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              TEMUKAN KAMI
            </Typography>

             <Link href="#" variant="subtitle1" color="textSecondary">
                <FacebookIcon className={classes.sociamedia} />
              </Link>

             <Link href="#" variant="subtitle1" color="textSecondary">
                <InstagramIcon />
              </Link>
          </Grid>

      </Grid>

      <Box mt={5} className={classes.copyright}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}
