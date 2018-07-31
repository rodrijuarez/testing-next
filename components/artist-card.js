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
    maxWidth: 345,
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
    const {classes, artist} = this.props;

    return (
      <div className="artist-name">
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
            <Button size="small" color="primary">
              Show events
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ArtistCard);
