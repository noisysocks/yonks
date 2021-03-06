import { parseDate } from 'chrono-node';
import { addProtocol } from '../../helpers/url';

const SAVE = 'yonks/posts/SAVE';
const DELETE = 'yonks/posts/DELETE';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SAVE:
      const id = action.post.id || nextId(state);
      const post = { ...action.post, id };
      return { ...state, [id]: post };

    case DELETE:
      const newState = { ...state };
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
}

function nextId(state) {
  const ids = Object.keys(state);
  if (ids.length === 0) {
    return 1;
  } else {
    return Math.max(...ids) + 1;
  }
}

export function savePost({ id, title, url, platform, when }) {
  return {
    type: SAVE,
    post: {
      id,
      title: title.trim(),
      url: addProtocol(url.trim()),
      platform: platform.trim(),
      date: parseDate(when),
    },
  };
}

export function deletePost(id) {
  return {
    type: DELETE,
    id,
  };
}
