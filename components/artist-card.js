import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: 600,
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

class ArtistCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      artist,
      events,
      showEventsClick,
      isLoadingEvents,
    } = this.props;

    const FacebookButton = artist.facebook_page_url ? (
      <Button href={artist.facebook_page_url} target="_blank">
        Facebook
      </Button>
    ) : null;

    const ArtistEvents = events.length
      ? events.map(event => (
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {event.venue.name} is going to happen in {event.venue.city},{
                event.venue.country
              }{' '}
              on the date {new Date(event.datetime).toLocaleString()}
            </Typography>
          </CardContent>
        ))
      : null;

    const Events = isLoadingEvents ? (
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Loading Events
        </Typography>
      </CardContent>
    ) : (
      ArtistEvents
    );

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={artist.thumb_url}
          title={artist.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {artist.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={showEventsClick}>
            Show events
          </Button>
          {FacebookButton}
        </CardActions>
        {Events}
      </Card>
    );
  }
}

export default withStyles(styles)(ArtistCard);
