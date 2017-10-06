import moment from 'moment';

export const fromNow = (time) => {
  const m = moment(time);
  return m.utc().fromNow();
}