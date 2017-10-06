import Moment from 'moment';

export const fromNow = (time) => Moment(time).utc().fromNow();

export const longFormFormat = (time) => Moment(time).format('LLL');

export const dateTimeFormat = (time) => Moment(time).format();

