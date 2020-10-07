import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from '../Toolbar';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  results: {
    height: '100%'
  }
}));

const ListMaps = ({map}) => {
  const classes = useStyles();


  return (
    <Page
      className={classes.root}
      title="Arway-Studio"
    >
      <Container maxWidth={false}>
        <Toolbar maps={map.length} />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {map.map((map) => (
              <Grid
                item
                key={map.map_id}
                lg={4}
                md={6}
                xs={12}
              >
                <Results 
                  className={classes.results}
                  map={map}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box> */}
      </Container>
    </Page>
  );
};

export default ListMaps;
