let nextTodoId = 0;
export const ADD_POST = (title, category, post) => ({
  type: "ADD_POST",
  id: nextTodoId++,
  title,
  category,
  post
});
export const EDIT_POST = (id, title, category, post) => ({
  type: "EDIT_POST",
  id,
  title,
  category,
  post
});

export const DELETE_POST = postID => ({
  type: "DELETE_POST",
  postID
});