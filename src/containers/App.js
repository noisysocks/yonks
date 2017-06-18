import React, { Component } from 'react';
import { getProviders, getDays, findPosts } from '../services/posts';
import PostEditor from '../components/PostEditor';
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
    this.setState({
      providers: getProviders(),
      days: getDays(),
    });

    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
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
                  posts={findPosts(provider, day)}
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

  dismissOverlay() {
    this.setState({ overlayedComponent: null });
  }

  presentAboutText() {
    this.setState({ overlayedComponent: <AboutText /> });
  }

  presentPostEditor(post = null) {
    this.setState({
      overlayedComponent: (
        <PostEditor post={post} onSubmit={this.handlePostEditorSubmit} />
      ),
    });
  }

  handleKeyDown = e => {
    if (e.key === '?') {
      this.presentAboutText();
    }
    if (e.key === 'a') {
      this.presentPostEditor();
    }
    if (e.key === 'Escape') {
      this.dismissOverlay();
    }
  };

  handleAboutClick = e => {
    e.preventDefault();
    this.presentAboutText();
  };

  handleAddPostClick = e => {
    e.preventDefault();
    this.presentPostEditor();
  };

  handlePostSelect = post => {
    this.presentPostEditor(post);
  };

  handleOverlayDismiss = () => {
    this.dismissOverlay();
  };

  handlePostEditorSubmit = post => {
    this.dismissOverlay();
    console.log(post);
  };
}

export default App;
