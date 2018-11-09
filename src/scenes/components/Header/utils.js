
// eslint-disable-next-line
export const generateOptionValue = (groupName, value) => `${groupName.toLowerCase()}@${value.toLowerCase().replace(' ', '-')}`;

export const generateOptionEntry = groupName => value => ({
  label: value,
  value: generateOptionValue(groupName, value),
});
