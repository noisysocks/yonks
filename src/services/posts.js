import moment from 'moment';
import { parseDate } from 'chrono-node';

function getPosts() {
  const postsData = localStorage.getItem('posts');
  return postsData ? JSON.parse(postsData) : [];
}

function setPosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function getProviders() {
  const providers = getPosts().map(post => post.provider);
  if (providers.length > 0) {
    return [...new Set(providers)].sort();
  } else {
    // TODO: App should have a proper empty view
    return [''];
  }
}

export function getDays(offset = 0, limit = 15) {
  return [...Array(limit).keys()].map(n => moment().add(offset + n, 'days'));
}

export function findPosts(provider, day) {
  return getPosts().filter(
    post => post.provider === provider && moment(post.date).isSame(day, 'day')
  );
}

export function addPost({ title, url, provider, when }) {
  const post = {
    title: title.trim(),
    url: url.trim(),
    provider: provider.trim(),
    date: parseDate(when),
  };
  setPosts(getPosts().concat([post]));
}
