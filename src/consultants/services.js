/* eslint import/prefer-default-export: off */

/**
 * Fetch consultant data from upstream API.
 *
 * @returns {object}
 */
export const fetchConsultantData = async () => {
  const API_URL = 'http://localhost:3000/consultants';

  const resp = await fetch(API_URL);

  return resp.json();
};
