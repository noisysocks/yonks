import React, { Component } from 'react';
import AboutText from '../components/AboutText';
import AppHeader from '../components/AppHeader';
import AppHeaderButton from '../components/AppHeaderButton';
import Overlay from '../components/Overlay';
import PlannerContainer from '../containers/PlannerContainer';
import PostEditorContainer from '../containers/PostEditorContainer';

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
            icon="question"
            onClick={this.handleAboutClick}
          />
          <AppHeaderButton
            href="#add-post"
            icon="plus"
            onClick={this.handleAddPostClick}
          />
        </AppHeader>

        <PlannerContainer onPostSelect={this.handlePostSelect} />

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
        <PostEditorContainer
          post={post}
          onSubmit={this.handlePostEditorSubmit}
        />
      ),
    });
  }

  dismissOverlay() {
    this.setState({ overlayedComponent: null });
  }

  handleKeyDown = e => {
    if (document.activeElement === document.body) {
      if (e.key === '?') {
        e.preventDefault();
        this.presentAboutText();
      }
      if (e.key === 'a') {
        e.preventDefault();
        this.presentPostEditor();
      }
    }

    if (e.key === 'Escape') {
      e.preventDefault();
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
