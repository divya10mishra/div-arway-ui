import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '20px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Container>
            <h1>References</h1>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Live From Space
          </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller The Vuforia Engine Basic + Cloud license offers all the powerful AR features included in the Basic license
                            (VuMarks, Images Targets, Object Targets, and Ground Plane) and adds a Cloud Recognition Database. Our Vuforia cloud
                            database supports up to 100,000 images and 10,000 image recognitions a month. This license is intended for businesses
                            and developers who want to build applications that use large, dynamic sets of targets.
                            Cloud databases are perfect for use with magazines or catalogs. Support is provided through our Vuforia Engine Community Forum
          </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                />
            </Card>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Live From Space
          </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller The Vuforia Engine Basic + Cloud license offers all the powerful AR features included in the Basic license
                            (VuMarks, Images Targets, Object Targets, and Ground Plane) and adds a Cloud Recognition Database. Our Vuforia cloud
                            database supports up to 100,000 images and 10,000 image recognitions a month. This license is intended for businesses
                            and developers who want to build applications that use large, dynamic sets of targets.
                            Cloud databases are perfect for use with magazines or catalogs. Support is provided through our Vuforia Engine Community Forum
          </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                />
            </Card>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Live From Space
          </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller The Vuforia Engine Basic + Cloud license offers all the powerful AR features included in the Basic license
                            (VuMarks, Images Targets, Object Targets, and Ground Plane) and adds a Cloud Recognition Database. Our Vuforia cloud
                            database supports up to 100,000 images and 10,000 image recognitions a month. This license is intended for businesses
                            and developers who want to build applications that use large, dynamic sets of targets.
                            Cloud databases are perfect for use with magazines or catalogs. Support is provided through our Vuforia Engine Community Forum
          </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                />
            </Card>

        </Container>
    );
}