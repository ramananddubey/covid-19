import React from 'react';
import { NavLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import globalimg from '../../static/images/cards/global_covid.jpg';
import styles from './homehero.module.css';

const HomeHero = () => {

  return (
    <Card className={styles.container} xs={12} md={3} >
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={globalimg}
          title="Contemplative Reptile"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            GLOBAL COVID19
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to='/global'><Button size="small" color="primary">Visit Global Covid-19</Button></NavLink>
      </CardActions>
    </Card>
  );
}
export default HomeHero;
