import React from 'react';
import moment from 'moment';

class LiveTimeDifference extends React.Component {
  timerId = null;

  state = {
    currTimestamp: moment(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currTimestamp: moment(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { sinceTimestamp } = this.props;
    const { currTimestamp } = this.state;

    const end = moment.unix(sinceTimestamp);
    const diff = moment.duration(currTimestamp.diff(end));

    return (
      diff.days() > 0
        ? '> 1 day'
        : moment.utc(diff.asMilliseconds()).format('HH[h] mm[m] ss[s]')
    );
  }
}

export default LiveTimeDifference;
