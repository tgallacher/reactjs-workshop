
/**
 * Fetch consultant data from upstream API.
 *
 * @returns {object}
 */
export const fetchConsultantData = async () => {
  const API_URL = ' https://demo3786895.mockable.io/consultants';

  const resp = await fetch(API_URL);

  return resp.json();
}
