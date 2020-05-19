import React from 'react';
import {NavLink} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IndiaCovid from '../../static/images/cards/india_covid.jpg';
import globalimg from '../../static/images/cards/global.jpg';
import quarantine from '../../static/images/cards/quarantine.jpg';
import NewsUpdate from '../../static/images/cards/update.jpg';
import styles from './promo.module.css';
import cx from 'classnames'


 const HomeHero = (props) => {
     console.log("props slug ",props.slug);

  return (
    <div >
    <div className={styles.container} xs = {12} md = {3}>
    <Card container spacing = {2} justify = "center"  className = {cx(styles.card)}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={IndiaCovid}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            INDIA COVID-19
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Here you can check the live updates of the coronavirus(COVID-19) in India. across all the states in India.
            so that you can update yourself.
            
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to='/States'><Button size="small" color="primary">inidan states situation</Button></NavLink>
      </CardActions>
    </Card>

<Card  container spacing = {2} justify = "center" className = {cx(styles.card) }>
<CardActionArea>
  <CardMedia
    className={styles.media}
    image={globalimg}
    title="Contemplative Reptile"
    
    
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      SELF-ASSESSMENT
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
    Here you can take the self-assessment and know your condition in today's situation.
      This will help you to protect your-self from COVID-19.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<NavLink to='/Assessment'><Button size="small" color="primary">Take Self-Assessment</Button></NavLink>

</CardActions>
</Card>
</div>
<div className={styles.container} xs = {12} md = {3}>

<Card  container spacing = {2} justify = "center" className = {cx(styles.card)}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={quarantine}
          title="Contemplative Reptile"
          
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CONNECT US
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Here you can contact us by submitting some information .  so that you can prevent your-self and others from COVID-19.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to='/contactus'><Button size="small" color="primary">Connect with us</Button></NavLink>

      </CardActions>
    </Card>

<Card container spacing = {2} justify = "center" className = {cx(styles.card)}>
<CardActionArea>
  <CardMedia
    className={styles.media}
    image={NewsUpdate}
    title="Contemplative Reptile"
    
    
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      BLOG COVID-19
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
    Here you can read the latest news about COVID-19. what things are going on around the world for stoping the COVID-19
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<NavLink to='/news'><Button size="small" color="primary">Read Latest News</Button></NavLink>

</CardActions>
</Card>
</div>
</div>
  );
}
export default HomeHero;
