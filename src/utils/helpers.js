import Moment from 'moment';

export const fromNow = (time) => {
  // Moment(time).utc().fromNow();
  return Moment(time).valueOf() <= Moment().subtract(7, 'days').valueOf() ? 
    Moment(time).format('LLL') : Moment(time).utc().fromNow();
}

export const dateTimeFormat = (time) => Moment(time).format();

