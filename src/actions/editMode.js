
import { 
  SET_EDIT_MODE
} from './actionTypes';

// SET_EDIT_MODE
export const toggleEditMode = ( id ) => {
  return {
    type: SET_EDIT_MODE,
    id
  }
}