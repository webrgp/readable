import * as ReadableAPI from '../utils/ReadableAPI';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

// Fetch categories from API
export const fetchCategories = () => dispatch => (
  ReadableAPI
      .fetchCategories()
      .then(categories => dispatch(loadCategories(categories)))
);


export const selectCategory = (selectedCategory) => {
  return {
    type: SELECT_CATEGORY,
    selectedCategory
  }
}