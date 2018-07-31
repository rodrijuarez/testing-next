import React from 'react';
import ArtistSearch from '../components/artist-search';
import ArtistCard from '../components/artist-card';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      artist: null,
      isLoadingEvents: false,
      artistEvents: [],
    };
  }

  componentDidMount() {
    const artist = localStorage.getItem('artist');
    const artistEvents = localStorage.getItem('artistEvents');

    this.setState({
      artist: artist ? JSON.parse(artist) : artist,
      artistEvents: artistEvents ? JSON.parse(artistEvents) : [],
    });
  }

  async updateSearch(search) {
    this.setState({search});
    const result = await fetch(
      'https://rest.bandsintown.com/artists/' + search + '?app_id=asd',
    );

    const artist = await result.json();

    this.setState({artist, artistEvents: []});
    localStorage.setItem('artist', JSON.stringify(artist));
    localStorage.setItem('artistEvents', JSON.stringify([]));
  }

  async loadEvents() {
    this.setState({isLoadingEvents: true});

    const {artist} = this.state;

    const result = await fetch(
      'https://rest.bandsintown.com/artists/' +
        artist.name +
        '/events?app_id=asd',
    );

    const artistEvents = (await result.json()) || [];

    this.setState({isLoadingEvents: false, artistEvents});
    localStorage.setItem('artistEvents', JSON.stringify(artistEvents));
  }

  render() {
    const {search, artist, isLoadingEvents, artistEvents: events} = this.state;
    return (
      <div>
        <div className="artist-name">
          <ArtistSearch
            value={search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>

        {artist ? (
          <div className="artist-card">
            <ArtistCard
              artist={artist}
              events={events}
              showEventsClick={this.loadEvents.bind(this)}
              isLoadingEvents={isLoadingEvents}
            />
          </div>
        ) : null}

        <style jsx>{`
          .artist-name {
            text-align: center;
          }
          .artist-card {
            margin-top: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
