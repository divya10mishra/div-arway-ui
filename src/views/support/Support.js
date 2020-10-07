import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import { Mail } from '@material-ui/icons';
import React from 'react';
import { MessageCircle } from 'react-feather';
import Page from 'src/components/Page';

const Support = () => {
  return (
    <Page title="Arway-Support">
      <Box>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography
              color="textPrimary"
              align="center"
              style={{ marginTop: 35, marginBottom: 30 }}
              gutterBottom
              variant="h1"
            >
              Need Help...? Write Us...
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              p={2}
            >
              <Grid container spacing={3}>
              <Grid item md={4}>
              <a href="mailto:support@arway.app">
                  <IconButton>
                    <Card>
                      <CardContent>
                        <Badge color="primary">
                          <Mail style={{ color:'4caf50',height: 120, width: 230 }} />
                        </Badge>
                        <Typography
                          color="textPrimary"
                          style={{ marginTop: 4, marginLeft: 3 }}
                          gutterBottom
                          variant="h5"
                        >
                          support@arway.app
                        </Typography>
                      </CardContent>
                    </Card>
                  </IconButton>
                  </a> 
                </Grid>
                <Grid item md={4}>
                  <IconButton
                  onClick={()=> window.open('https://discord.com/invite/5mG9ewM')}
                  >
                    <Card>
                      <CardContent>
                        <Badge color="primary">
                          <MessageCircle style={{ color:'#4caf50',height: 160, width: 230 }} />
                        </Badge>
                        <Typography
                          color="textPrimary"
                          style={{ marginTop: 4, marginLeft: 3 }}
                          gutterBottom
                          variant="h5"
                        >
                          Discord
                        </Typography>
                      </CardContent>
                    </Card>
                  </IconButton>
                </Grid>
                <Grid item md={4}>
              <a href="mailto:hello@arway.app">
                  <IconButton>
                    <Card>
                      <CardContent>
                        <Badge color="primary">
                          <Mail style={{color:'4caf50', height: 120, width: 230 }} />
                        </Badge>
                        <Typography
                          color="textPrimary"
                          style={{ marginTop: 4, marginLeft: 3 }}
                          gutterBottom
                          variant="h5"
                        >
                          hello@arway.app
                        </Typography>
                      </CardContent>
                    </Card>
                  </IconButton>
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Support;
