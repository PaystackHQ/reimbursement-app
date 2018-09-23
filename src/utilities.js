import moment from 'moment';

export function timeAgo(date) {
  return moment(date).calendar(null, {
    sameDay: 'Today',
    lastDay: 'Yesterday',
    lastWeek: 'Last ddd',
    sameElse: 'Do MMM, YYYY',
  });
}

export function dateAndTime(date) {
  return `${timeAgo(date)} | ${moment(date).format('hh:MM A')}`;
}

export function naira(amount) {
  return `N${amount.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
}

export function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
