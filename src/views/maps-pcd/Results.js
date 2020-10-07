import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
  // const [isLoading, setIsLoading] = useState(true);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem('dev-token');
    fetch('https://api.arway.xyz/map-api/cloud_list/', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'dev-token': token
      })
    })
      .then(res => res.json())
      .then(response => {
        // setIsLoading(false);
        setMaps(response.cloudMapList);
      })
      .catch(error => console.log(error));
  });
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Map ID </TableCell>
                <TableCell>Map Name</TableCell>
                <TableCell>Status </TableCell>
                <TableCell>Created On</TableCell>
                <TableCell>Map File PCD</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maps.map(map => (
                <TableRow hover key={map.id}>
                  <TableCell>{map.map_name}</TableCell>
                  <TableCell>{map.binary_link}</TableCell>
                  <TableCell>{map.uploaded}</TableCell>
                  <TableCell>
                    <Link
                      href={`https://developer.arway.app/usr/pcd-viewer.php?pcd=${map.pcd_link}`}
                      target="_blank"
                    >
                      View
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
