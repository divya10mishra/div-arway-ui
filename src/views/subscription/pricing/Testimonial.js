import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    display:'flex',
    flexDirection:'row',
    marginTop:'4%'
  },
  content:{
    textAlign:'center'
  },
  imgDesign:{
    borderRadius:'50%',
    height: '290px',
    padding:'9%'
  }
});

const testimonials=[
  {
    img:'/static/images/smile1.jpg',
    name:'Lisa Mantick'
  },
  {
    img:'/static/images/smile2.jpg',
    name:'Chris Jensen'
  },
  {
    img:'/static/images/smile3.jpg',
    name:'Pamilo Anderson'
  },
  {
    img:'/static/images/smile1.jpg',
    name:'Lisa Mantick'
  }
]

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {testimonials.length>0?testimonials.map((item)=>{
        return (<CardActionArea>
          <CardMedia
           className={classes.imgDesign}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={item.img}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="b" component="h2">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>)
        }):null
      }
    </Card>
  );
}
