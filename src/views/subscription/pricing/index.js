import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { Link  } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import TopBar from './../../../layouts/DashboardLayout/TopBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },


}));
const tiers = [
  {
    title: 'Ground Plan',
    price: '0',
    description: ['Free forever',
      'Forum Support'],
    detail: ['Ground Feature Plan','Upto 2,000 requests/mo', '50 maps of point cloud map', '1GB content size in ARWAY web studio', 'Single access for ARWAY web studio', '24/7 Production Support for early adopters'],
    buttonText: 'Try now',
    buttonVariant: 'contained',
  },
  {
    title: 'Aircraft Plan',
    price: '79',
    description: ['$49 Discount for early adopters',
    'overage API charge $10 every 5,400 requets',
    'overage point cloud map charge $10 every 1,700 maps',
      'Forum Support',
    ],
    detail: ['Aircraft Feature Plan','Upto 20,000 requests/mo', '10,000 maps of point cloud map', '100GB content size in ARWAY web studio', '2 access granted for ARWAY web studio', '24/7 Production Support for early adopters'],
    buttonText: 'Fly now',
    buttonVariant: 'contained',
  },
  {
    title: 'Rocket Plan',
    price: '277',
    description: ['$149 Discount for early adopters',
    'overage API charge $20 every 5,400 requets',
    'overage point cloud map charge $20 every 3,300 maps',
      
      'Production Support'
    ],
    detail: ['Rocket Feature Plan','Upto 100,000 requests/mo', '10,000 maps of point cloud map', '1,000GB content size in ARWAY web studio', '5 access granted for ARWAY web studio', '24/7 Production Support for all users'],
    buttonText: 'Space now',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise Plan',
    price: 'custom',
    description: ['Custom',
      'Production Support'
    ],
    detail: ['Enterprise Feature Plan','Custom'],
    buttonText: 'Call us now',
    buttonVariant: 'contained',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar/>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    
      <Container maxWidth="sm" component="main" className={classes.heroContent}>

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>

      </Container>

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
          <Button variant="contained" 
          variant="contained"
           style={{backgroundColor:'#19944a'}}>
            <AnchorLink className="nav-link" href='#compare'
            style={{color:'white'}}
            >Compare</AnchorLink>
          </Button>
       
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            // <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
               <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}
                    //  color="success"
                    // component={Link}
                    // to="./NewLogin"
                    style={{ backgroundColor: '#19944a', color: 'white' }}
                    onClick={() => {
                      window.location.href = '/NewLogin'
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
              {/* feature */}
              <CardContent>
                <ul id="compare">
                  {tier.detail.map((line) => (
                    <Typography component="li" variant="subtitle1" align="left" key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              {/* feature */}
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}