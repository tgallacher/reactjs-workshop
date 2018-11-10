/* eslint no-nested-ternary: off, camelcase: off */
import moment from 'moment';

import {
  isStatusUnavailable,
  isStatusAvailable,
  isStatusBusy,
} from 'utils/status';

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
  team,
}, shouldRandomise) => {
  const currMoment = moment();
  const randomisedActivity = shouldRandomise
    ? mockActivities[Math.floor(Math.random() * 21)]
    : activity;

  return {
    // Internal for sorting
    // TODO switch this to status enum usage,
    // and update app to use 'activity' for string value
    _statusEnum: isStatusAvailable(randomisedActivity)
      ? 'available'
      : isStatusUnavailable(randomisedActivity)
        ? 'unavailable'
        : isStatusBusy(randomisedActivity)
          ? 'busy'
          : 'unknown',
    statusSince: shouldRandomise
      ? currMoment
        .subtract(Math.floor(Math.random() * 2), 'hours')
        .subtract(Math.floor(Math.random() * 59), 'minutes')
        .subtract(Math.floor(Math.random() * 59), 'seconds')
        .unix()
      : moment.unix(activity_changed_at)
        .year(currMoment.year())
        .date(currMoment.date())
        .month(currMoment.month())
        .hour(currMoment.subtract(1, 'hour').hour())
        .unix(),
    functions,
    username,
    sources: Array.isArray(sources)
      ? sources
        .filter(source => source !== 'direct_dial')
        .map(source => ({
          phone: 'Inbound',
          dialler: 'Dialler',
          consultant: 'Internal',
        }[source]))
      : [],
    status: randomisedActivity,
    name: friendly_name,
    team,
  };
};

/**
 * Generic helper to sort consultant data in a given order, based
 * on a chosen node/key name.
 *
 * @param {object[]} consultants consultant data
 * @param {string} nodeName Valid node/key name inside consultant object
 * @see transformConsultantNode()
 */
export const sortConsultantsAlphabeticallyByNode = (consultants = [], nodeName) => {
  if (
    ! Array.isArray(consultants)
    || consultants.length === 0
    // Assume if node in 1st element, it's in all of them
    // This should be reasonable, as we transform data as it comes in.
    || ! (nodeName in consultants[0])
  ) {
    return consultants;
  }

  // Sorts alphabetical order
  const sortedNodeVals = consultants.map(c => c[nodeName]).sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  });
  const uniqNodeVals = [...(new Set(sortedNodeVals))];

  return [].concat(
    ...uniqNodeVals.map(
      t => consultants.filter(
        c => c[nodeName] === t,
      ),
    ),
  );
};
