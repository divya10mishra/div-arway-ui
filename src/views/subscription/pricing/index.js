import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import TopBar from './../../../layouts/DashboardLayout/TopBar';
import FreeBreakfast from '@material-ui/icons/FreeBreakfast';
import Flight from '@material-ui/icons/Flight'
import Call from '@material-ui/icons/Call';
import FAQ from './FAQ'
import Testimonial from './Testimonial'
import DoneAll from '@material-ui/icons/DoneAll'
import Done from '@material-ui/icons/Done';
import Reference from './reference'

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
    backgroundColor:'bisque'
      // theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  enterpriseCard: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
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
    icon: <FreeBreakfast />,
    price: '0',
    description: ['Free forever',
      'Forum Support'],
    detailHeader: 'Ground Feature Plan',
    detail: ['Upto 2,000 requests/mo', '50 maps of point cloud map', '1GB content size in ARWAY web studio', 'Single access for ARWAY web studio', '24/7 Production Support for early adopters'],
    buttonText: 'Try now',
    buttonVariant: 'contained',
  },
  {
    title: 'Aircraft Plan',
    icon: <Flight />,
    price: '79',
    detailHeader: 'Aircraft Feature Plan',
    description: ['$49 Discount for early adopters',
      'Overage API charge $10 every 5,400 requets',
      'Overage point cloud map charge $10 every 1,700 maps',
      'Forum Support',
    ],
    detail: ['Aircraft Feature Plan', 'Upto 20,000 requests/mo', '10,000 maps of point cloud map', '100GB content size in ARWAY web studio', '2 access granted for ARWAY web studio', '24/7 Production Support for early adopters'],
    buttonText: 'Fly now',
    buttonVariant: 'contained',
  },
  {
    title: 'Rocket Plan',
    icon: <Flight />,
    detailHeader: 'Rocket Feature Plan',
    price: '277',
    description: ['$149 Discount for early adopters',
      'Overage API charge $20 every 5,400 requets',
      'Overage point cloud map charge $20 every 3,300 maps',

      'Production Support'
    ],
    detail: ['Rocket Feature Plan', 'Upto 100,000 requests/mo', '10,000 maps of point cloud map', '1,000GB content size in ARWAY web studio', '5 access granted for ARWAY web studio', '24/7 Production Support for all users'],
    buttonText: 'Space now',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise Plan',
    icon: <Call />,
    detailHeader: '',
    description: ['Custom'],
    detail: [],
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
      <TopBar />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
        <br />
        <center>
          <Button
            variant="contained"
            style={{ backgroundColor: 'info' }}>
            <AnchorLink className="nav-link" href='#compare'
              style={{ color: 'black' }}
            >Compare</AnchorLink>
          </Button>
        </center>

      </Container>

      {/* End hero unit */}
      <Container maxWidth="lg" component="main">

        <Grid container spacing={5}>
          {tiers.map((tier) => (
            // <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
            <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <Card>
                <CardHeader
                  action={tier.icon}
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />

                <CardContent>
                  <div className={classes.cardPricing}>
                    {tier.title !== 'Enterprise Plan' ? (<><Typography component="h2" variant="h1" color="textPrimary">
                      ${tier.price}
                    </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                    </Typography></>) : null}

                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {tier.title === 'Enterprise Plan' ? (<b style={{ fontSize: '20px' }}>{line}</b>) : <div><DoneAll /> {line}</div>}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}
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
                  <h3>{tier.detailHeader}</h3>
                  {tier.detail.length > 0 ? tier.detail.map((line) => (
                    <Typography component="li" variant="subtitle1" align="left" key={line}>
                      <div><Done />{line}</div>
                    </Typography>
                  )) : null}
                </ul>
              </CardContent>
              {/* feature */}
            </Grid>
          ))}

        </Grid>

      </Container>

      {/* FAQ Start */}

      <Container>
      <Reference/>
        <FAQ />
        <Testimonial />
      </Container>

      {/* FAQ End */}

     

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