import moment from 'moment';

// We add duplicates to effectively
// weigh certain activity types.
const mockActivities = [
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
];

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
}, shouldRandomise) => {
  const currMoment = moment();

  return {
    status_since: shouldRandomise
      ?  currMoment
        .subtract(Math.floor(Math.random() * 2), 'hours')
        .subtract(Math.floor(Math.random() * 59), 'minutes')
        .subtract(Math.floor(Math.random() * 59), 'seconds')
        .unix()
      : moment.unix(activity_changed_at)
        .date(currMoment.date())
        .hour(currMoment.subtract(1, 'hours').hour()),
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
    status: shouldRandomise
      ? mockActivities[Math.floor(Math.random() * 21)]
      : activity,
    name: friendly_name,
    team,
  }
};
