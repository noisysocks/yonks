import moment from 'moment';
import sampleData from '../sampleData';

export function getProviders() {
  return [...new Set(sampleData.posts.map(post => post.provider))].sort();
}

export function getDays(offset = 0, limit = 15) {
  return [...Array(limit).keys()].map(n => moment().add(offset + n, 'days'));
}

export function findPosts(provider, day) {
  return sampleData.posts.filter(
    post => post.provider === provider && moment(post.date).isSame(day, 'day')
  );
}
