import React from 'react';
import ArtistSearch from '../components/artist-search';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {search: ''};
  }

  updateSearch(search) {
    this.setState({search});
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
