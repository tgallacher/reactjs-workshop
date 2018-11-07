/**
 * Miscellaneous utility helpers which don't fit elsewhere.
 */

export const SORT_DIR_DESC = 'desc';
export const SORT_DIR_ASC = 'asc';

export const sortArrayAlphabetically = (strArr, dir = SORT_DIR_DESC) => {
  if (! Array.isArray(strArr)) {
    // we haven't been given what we
    // expected, just return it.
    return strArr;
  }

  return strArr.sort((a, b) => {
    const strA = a.toLowerCase();
    const strB = b.toLowerCase();

    // sort string descending
    if (dir === SORT_DIR_DESC) {
      if (strA < strB) return -1;
      if (strA > strB) return 1;
    } else if (dir === SORT_DIR_ASC) {
      // sort string ascending
      if (strA > strB) return -1;
      if (strA < strB) return 1;
    }

    return 0; // leave un-touched
  });
};
