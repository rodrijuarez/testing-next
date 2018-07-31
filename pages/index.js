import React from 'react';
import ArtistSearch from '../components/artist-search';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {search: ''};
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
    const {search} = this.state;
    return (
      <div>
        <ArtistSearch value={search} onChange={this.updateSearch.bind(this)} />
      </div>
    );
  }
}
