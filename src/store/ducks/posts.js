const SAVE = 'yonks/posts/SAVE';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SAVE:
      const id = action.post.id || Object.keys(state).length + 1;
      const post = { ...action.post, id };
      return { ...state, [id]: post };

    default:
      return state;
  }
}

export function savePost(post) {
  return { type: SAVE, post };
}
