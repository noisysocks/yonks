import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import PlannerCell from '../components/PlannerCell';
import PlannerRow from '../components/PlannerRow';
import PlannerTable from '../components/PlannerTable';

// How many days to load per pagination
const PAGE_SIZE = 14;

// How far down the page (%) triggers a new pagination
const PAGE_SCROLL_PERCENT = 0.8;

class Planner extends Component {
  state = {
    numDays: PAGE_SIZE,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <PlannerTable columns={this.props.data.platforms}>
        {/* TODO: Ghost off-screen elements to reduce memory usage */}
        {this.getDays().map(day =>
          <PlannerRow key={day} title={day.format('ddd D')}>
            {this.props.data.platforms.map(platform =>
              <PlannerCell
                key={platform}
                posts={this.props.data.getPosts(platform, day)}
                onPostSelect={this.props.onPostSelect}
              />
            )}
          </PlannerRow>
        )}
      </PlannerTable>
    );
  }

  getDays() {
    const days = [];
    for (let i = 0; i < this.state.numDays; i++) {
      days.push(moment().add(i, 'days'));
    }
    return days;
  }

  handleScroll = e => {
    const windowBottomY = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;

    if (windowBottomY >= documentHeight * PAGE_SCROLL_PERCENT) {
      this.setState({ numDays: this.state.numDays + PAGE_SIZE });
    }
  };
}

Planner.propTypes = {
  data: PropTypes.shape({
    platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
    getPosts: PropTypes.func.isRequired,
  }).isRequired,
  onPostSelect: PropTypes.func.isRequired,
};

export default Planner;
