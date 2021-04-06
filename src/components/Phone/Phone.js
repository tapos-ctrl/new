import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import '../Phone/Phone.css';
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:'0 auto',
    marginTop: '40px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Phone({phone}){

  const classes = useStyles();
  const history = useHistory()
    const handleBook = (Name) => {
        history.push(`/book/${Name}`);
    }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={phone.image}
        title="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {phone.Name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="price">
          Price: {phone.price} 
        </IconButton>
        <Button className="boy-now" onClick={() => handleBook(phone.Name)} variant="contained" color="primary">
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
