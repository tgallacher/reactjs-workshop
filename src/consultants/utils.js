
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
  status_since: activity_changed_at,
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
  status: activity,
  name: friendly_name,
  team,
});
