import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Unity from 'src/icons/Unity';
import AndroidIcon from '@material-ui/icons/Android';
import {
  Box,
  Card,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, downloads, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application name</TableCell>
                <TableCell>Version</TableCell>
                <TableCell>Made for</TableCell>
                <TableCell>Download</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {downloads.map(download => (
                <TableRow hover key={download.id}>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography
                        color="textPrimary"
                        variant="body1"
                        style={{ padding: '10px' }}
                      >
                        {download.app}
                      </Typography>
                      {download.app === 'Unity' ? <Unity /> : <AndroidIcon />}
                    </Box>
                  </TableCell>
                  <TableCell>{download.version}</TableCell>
                  <TableCell>{download.madeFor}</TableCell>
                  <TableCell>
                    <Link href={download.dwUrl} target="_blank">
                      {download.dwType}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  downloads: PropTypes.array.isRequired
};

export default Results;
