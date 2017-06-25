import React, { Component } from 'react';
import AboutText from '../components/AboutText';
import AppHeader from '../components/AppHeader';
import AppHeaderButton from '../components/AppHeaderButton';
import Overlay from '../components/Overlay';
import Planner from '../containers/Planner';
import PostEditor from '../containers/PostEditor';

class App extends Component {
  state = {
    overlayedComponent: null,
  };

  componentDidMount() {
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

        <Planner onPostSelect={this.handlePostSelect} />

        {this.state.overlayedComponent &&
          <Overlay onDismiss={this.handleOverlayDismiss}>
            {this.state.overlayedComponent}
          </Overlay>}
      </div>
    );
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

  dismissOverlay() {
    this.setState({ overlayedComponent: null });
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

  handlePostEditorSubmit = () => {
    this.dismissOverlay();
  };
}

export default App;
