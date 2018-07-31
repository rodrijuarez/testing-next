import React from 'react';
import TextField from '@material-ui/core/TextField';

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
      <div className="artist-name">
        <TextField
          onChange={$event => this.updateSearch($event.target.value)}
          value={search}
        />
        <style jsx>{`
          .artist-name {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
