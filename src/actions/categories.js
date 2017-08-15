import * as ReadableAPI from '../utils/ReadableAPI';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  ReadableAPI
      .fetchCategories()
      .then(categories => dispatch(loadCategories(categories)))
);