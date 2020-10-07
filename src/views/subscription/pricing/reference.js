import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop:'4%'
  },
  content:{
    textAlign:'justify'
  },
  reference1:{
      display:'flex',
      flexDirection:'row'
    },
    reference2:{
        display:'flex',
        flexDirection:'row-reverse'
      }
});

const projects=[
    {
        name:'Poject 1',
        img:'/static/images/project1.jpg',
        orientation:'row',
        description:`Mac Miller The Vuforia Engine Basic + Cloud license offers all the powerful AR features included in the Basic license
        (VuMarks, Images Targets, Object Targets, and Ground Plane) and adds a Cloud Recognition Database. Our Vuforia cloud
        database supports up to 100,000 images and 10,000 image recognitions a month. This license is intended for businesses
        and developers who want to build applications that use large, dynamic sets of targets.
        Cloud databases are perfect for use with magazines or catalogs. Support is provided through our Vuforia Engine Community Forum`
    },
    {
        name:'Poject 2',
        img:'/static/images/project2.jpg',
        orientation:'row-reverse',
        description:`Mac Miller The Vuforia Engine Basic + Cloud license offers all the powerful AR features included in the Basic license
        (VuMarks, Images Targets, Object Targets, and Ground Plane) and adds a Cloud Recognition Database. Our Vuforia cloud
        database supports up to 100,000 images and 10,000 image recognitions a month. This license is intended for businesses
        and developers who want to build applications that use large, dynamic sets of targets.
        Cloud databases are perfect for use with magazines or catalogs. Support is provided through our Vuforia Engine Community Forum`
    },
    {
        name:'Poject 3',
        img:'/static/images/project3.jpg',
        orientation:'row',
        description:`Mac Miller The Vuforia Engine Basic + Cloud license offers all the powerful AR features included in the Basic license
        (VuMarks, Images Targets, Object Targets, and Ground Plane) and adds a Cloud Recognition Database. Our Vuforia cloud
        database supports up to 100,000 images and 10,000 image recognitions a month. This license is intended for businesses
        and developers who want to build applications that use large, dynamic sets of targets.
        Cloud databases are perfect for use with magazines or catalogs. Support is provided through our Vuforia Engine Community Forum`
    },
    {
        name:'Poject 4',
        img:'/static/images/project4.jpg',
        orientation:'row-reverse',
        description:`Mac Miller The Vuforia Engine Basic + Cloud license offers all the powerful AR features included in the Basic license
        (VuMarks, Images Targets, Object Targets, and Ground Plane) and adds a Cloud Recognition Database. Our Vuforia cloud
        database supports up to 100,000 images and 10,000 image recognitions a month. This license is intended for businesses
        and developers who want to build applications that use large, dynamic sets of targets.
        Cloud databases are perfect for use with magazines or catalogs. Support is provided through our Vuforia Engine Community Forum`
    },
]

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        {projects.length>0?projects.map(
            (item)=>{
                return(
                <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
            <Typography variant="subtitle1" color="textSecondary">{item.description}</Typography>
        </CardContent>
      </CardActionArea>
            )}
        ):null}
    </Card>
  );
}
