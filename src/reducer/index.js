import { combineReducers } from "redux";

const posts = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
          post: action.post
        }
      ];

    case "EDIT_POST":

    const updatedItems = state.map(item => {
      if (item.id === action.id) {
        return {
          ...item,
          ...{
            id: action.id,
            title: action.title,
            category: action.category,
            post: action.post
          }
        };
      }
      return item;
    });
    return updatedItems;

    case "DELETE_POST":
      return [...state].filter(element => parseInt(element.id, 10) !== parseInt(action.postID,10));
    default:
      return state;
  }
};
export const mainReducer = combineReducers({
  posts
});