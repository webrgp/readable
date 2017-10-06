import * as ReadableAPI from '../utils/ReadableAPI';

import { 
  LOAD_CATEGORIES, 
  SELECT_CATEGORY 
} from './actionTypes'

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