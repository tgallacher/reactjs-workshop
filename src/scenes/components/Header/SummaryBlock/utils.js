/* eslint import/prefer-default-export: off */
import { cx } from 'emotion';

/**
 *
 * @param {string} status Consultant status
 * @see VALID_STATUSES
 */
export const getClassNameVariants = (status) => {
  const isUnavailable = status === 'unavailable';
  const isAvailable = status === 'available';
  const isBusy = status === 'busy';

  const colorClassName = cx({
    'text-orange-dark': isUnavailable,
    'text-purple-dark': isBusy,
    'text-green-dark': isAvailable,
  });

  const iconVariantClassName = cx({
    'fas fa-user-slash': isUnavailable,
    'far fa-user': isAvailable,
    'fas fa-user': isBusy,
  });

  return {
    color: colorClassName,
    icon: iconVariantClassName,
  };
};
