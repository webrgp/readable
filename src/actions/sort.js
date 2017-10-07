import { 
  SET_SORT
} from './actionTypes';

export const setSort = (orderby, sort) => {
  return {
    type: SET_SORT,
    orderby,
    sort
  }
}