import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value, onChange} = this.props;

    return (
      <div className="artist-name">
        <TextField
          onChange={$event => onChange($event.target.value)}
          value={value}
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
