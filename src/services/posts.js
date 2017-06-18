import moment from 'moment';

function getPosts() {
  return localStorage.getItem('posts') || [];
}

export function getProviders() {
  const providers = getPosts().map(post => post.provider);
  return [...new Set(providers)].sort();
}

export function getDays(offset = 0, limit = 15) {
  return [...Array(limit).keys()].map(n => moment().add(offset + n, 'days'));
}

export function findPosts(provider, day) {
  return getPosts().filter(
    post => post.provider === provider && moment(post.date).isSame(day, 'day')
  );
}
