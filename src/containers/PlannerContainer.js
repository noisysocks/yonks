import moment from 'moment';
import { connect } from 'react-redux';
import Planner from '../components/Planner';
import { unique } from '../helpers/array';

function getPlatforms(state) {
  const platforms = Object.values(state.posts).map(post => post.platform);
  if (platforms.length > 0) {
    return unique(platforms.sort());
  } else {
    // TODO: Planner should have a proper empty view
    return [''];
  }
}

const makeGetPosts = state => (platform, day) => {
  return Object.values(state.posts).filter(
    post => post.platform === platform && moment(post.date).isSame(day, 'day')
  );
};

function mapStateToProps(state) {
  return {
    data: {
      platforms: getPlatforms(state),
      getPosts: makeGetPosts(state),
    },
  };
}

const PlannerContainer = connect(mapStateToProps)(Planner);

export default PlannerContainer;
