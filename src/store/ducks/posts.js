import { parseDate } from 'chrono-node';

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

export function savePost({ id, title, url, platform, when }) {
  return {
    type: SAVE,
    // TODO: Probably move this into a sanitizePost() helper
    post: {
      id,
      title: title.trim(),
      url: url.trim(), // TODO: Add protocol if it doesn't exist
      platform: platform.trim(),
      date: parseDate(when),
    },
  };
}
