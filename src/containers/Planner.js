import moment from 'moment';
import { connect } from 'react-redux';
import Planner from '../components/Planner';

function getProviders(state) {
  const providers = Object.values(state.posts).map(post => post.provider);
  if (providers.length > 0) {
    return [...new Set(providers)].sort();
  } else {
    // TODO: Planner should have a proper empty view
    return [''];
  }
}

const makeGetPosts = state => (provider, day) => {
  return Object.values(state.posts).filter(
    post => post.provider === provider && moment(post.date).isSame(day, 'day')
  );
};

function mapStateToProps(state) {
  return {
    data: {
      providers: getProviders(state),
      getPosts: makeGetPosts(state),
    },
  };
}

const PlannerContainer = connect(mapStateToProps)(Planner);

export default PlannerContainer;
