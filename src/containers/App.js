import React, { Component } from 'react';
import _, { range, filter } from 'lodash';
import moment from 'moment';
import sampleData from '../sampleData';
import PostEditor from './PostEditor';
import AppHeader from '../components/AppHeader';
import AppHeaderButton from '../components/AppHeaderButton';
import PlannerTable from '../components/PlannerTable';
import PlannerRow from '../components/PlannerRow';
import PlannerCell from '../components/PlannerCell';
import Overlay from '../components/Overlay';
import AboutText from '../components/AboutText';

class App extends Component {
  state = { providers: [], days: [] };

  componentDidMount() {
    const providers = _(sampleData.posts).map('provider').uniq().value();
    const days = range(15).map(n => moment().add(n, 'days'));
    this.setState({ providers, days });

    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  findPosts(provider, day) {
    return filter(
      sampleData.posts,
      post => post.provider === provider && moment(post.date).isSame(day, 'day')
    );
  }

  render() {
    return (
      <div>
        <AppHeader>
          <AppHeaderButton
            href="#about"
            onClick={this.handleAboutClick}
            icon="question"
          />
          <AppHeaderButton
            href="#add-post"
            onClick={this.handleAddPostClick}
            icon="plus"
          />
        </AppHeader>

        <PlannerTable columns={this.state.providers}>
          {this.state.days.map(day =>
            <PlannerRow key={day} title={day.format('ddd D')}>
              {this.state.providers.map(provider =>
                <PlannerCell
                  key={provider}
                  posts={this.findPosts(provider, day)}
                  onPostSelect={this.handlePostSelect}
                />
              )}
            </PlannerRow>
          )}
        </PlannerTable>

        {this.state.overlayedComponent &&
          <Overlay onDismiss={this.handleOverlayDismiss}>
            {this.state.overlayedComponent}
          </Overlay>}
      </div>
    );
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.dismissOverlay();
    }
  };

  handleAboutClick = e => {
    e.preventDefault();
    this.setState({ overlayedComponent: <AboutText /> });
  };

  handleAddPostClick = e => {
    e.preventDefault();
    this.setState({ overlayedComponent: <PostEditor /> });
  };

  handlePostSelect = (e, post) => {
    e.preventDefault();
    this.setState({ overlayedComponent: <PostEditor post={post} /> });
  };

  handleOverlayDismiss = e => {
    e.preventDefault();
    this.dismissOverlay();
  };

  dismissOverlay() {
    this.setState({ overlayedComponent: null });
  }
}

export default App;
