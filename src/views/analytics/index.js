import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Page from 'src/components/Page';
import Log from './Log';
import ReqPerDay from './ReqPerDay';
import AccessToken from './AccessToken';
import TotalApiRequest from './TotalApiRequest';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AnalyticsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Analytics">
      <Container maxWidth={false}>
        <Typography
          color="textPrimary"
          variant="h1"
          style={{ textAlign: 'center' }}
        >
          Documentation:
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <AccessToken />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <TotalApiRequest />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <Log />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <ReqPerDay />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AnalyticsView;
