import { 
  LOAD_CATEGORIES, 
  SELECT_CATEGORY 
} from '../actions/categories';

const categories = (state = {}, action) => {
  const { categories, selectedCategory } = action
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory
      }

    default:
      return state;
  }
}

export default categories;