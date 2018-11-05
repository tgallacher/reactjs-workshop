import moment from 'moment';

/**
 * Normalise raw data into format/shape expected inside app.
 *
 * @param {Object} consultantNode Raw consultant data node
 * @returns {Object}
 */
export const transformConsultantNode = ({
  activity_changed_at,
  activity,
  username,
  functions,
  sources,
  friendly_name,
  team
}) => ({
  status_since: moment()
    .subtract(Math.floor(Math.random() * 2), 'hours')
    .subtract(Math.floor(Math.random() * 59), 'minutes')
    .subtract(Math.floor(Math.random() * 59), 'seconds')
    .unix(),
  functions,
  username,
  sources: Array.isArray(sources)
    ? sources
      .filter(source => source !== 'direct_dial')
      .map(source => ({
        'phone': 'Inbound',
        'dialler': 'Dialler',
        'consultant': 'Internal'
      }[source]))
    : [],
  status: [
    'Break',
    'Call Work',
    'Comfort Break',
    'Gone Home',
    'Ready',
    'Ready',
    'Ready',
    'Ready',
    'Lunch',
    'On Call',
    'Manual Dial',
    'On Call',
    'Meeting',
    'On Call',
    'Ready',
    'On Wrap',
    'Ready',
    'On Call',
    'Ready',
    'On Call',
    'Ready',
    'Training / Coaching',
  ][Math.floor(Math.random() * 21)],
  name: friendly_name,
  team,
});
