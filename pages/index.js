import React from 'react';
import ArtistSearch from '../components/artist-search';
import ArtistCard from '../components/artist-card';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {search: '', artist: null};
  }

  async updateSearch(search) {
    this.setState({search});
    const result = await fetch(
      'https://rest.bandsintown.com/artists/' + search + '?app_id=asd',
    );

    const artist = await result.json();

    this.setState({artist});
  }

  render() {
    const {search, artist} = this.state;
    return (
      <div>
        <ArtistSearch value={search} onChange={this.updateSearch.bind(this)} />
        {artist ? <ArtistCard artist={artist} /> : null}
      </div>
    );
  }
}
