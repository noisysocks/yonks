import _, { range, filter } from 'lodash';
import moment from 'moment';
import sampleData from '../sampleData';

export function getProviders() {
  return _(sampleData.posts).map('provider').uniq().value();
}

export function getDays(offset = 0, limit = 15) {
  return range(limit).map(n => moment().add(offset + n, 'days'));
}

export function findPosts(provider, day) {
  return filter(
    sampleData.posts,
    post => post.provider === provider && moment(post.date).isSame(day, 'day')
  );
}
