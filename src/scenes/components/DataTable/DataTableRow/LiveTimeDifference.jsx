import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class LiveTimeDifference extends React.Component {
  timerId = null;

  constructor(props) {
    super(props);

    const nowMoment = moment();
    const sinceMoment = moment.unix(props.sinceTimestamp); // timestamp in secs
    const diffMoment = moment.utc(nowMoment.diff(sinceMoment));

    this.state = {
      currTimestamp: diffMoment,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(({ currTimestamp }) => ({
        currTimestamp: currTimestamp.add(1, 'seconds'),
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { currTimestamp } = this.state;

    return (
      currTimestamp.hours() > 24
        ? '> 1 day'
        : currTimestamp
          .format('HH[h] mm[m] ss[s]')
    );
  }
}

LiveTimeDifference.propTypes = {
  sinceTimestamp: PropTypes.number, // eslint-disable-line
};

export default LiveTimeDifference;
