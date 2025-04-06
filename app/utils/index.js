import moment from 'moment';

const LOCAL_KEYS = {
  TOKEN: 'TOKEN',
  USER: 'USER',
  HAS_SEEN_ONBOARDING: 'HAS_SEEN_ONBOARDING',
};

const formateDate = date => {
  const formattedDate = moment(date).format('MMM-DD-YY');
  formattedDate.toUpperCase();
  return formattedDate;
};

export const formatUSPhoneNumber = value => {
  if (!value) return value;

  // Remove all non-digit characters
  const phoneNumber = value.replace(/[^\d]/g, '');

  // Format as (123) 123-1234
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`;
};
export const simplifyPhoneNumber = phoneNumber => {
  const simpleNumber = phoneNumber
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '')
    .replaceAll(' ', '');
  return simpleNumber;
};

export {LOCAL_KEYS, formateDate};
