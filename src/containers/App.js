import React, { Component } from 'react';
import _, { range, filter } from 'lodash';
import moment from 'moment';
import sampleData from '../sampleData';
import AppHeader from '../components/AppHeader';
import AppHeaderButton from '../components/AppHeaderButton';
import PlannerTable from '../components/PlannerTable';
import PlannerRow from '../components/PlannerRow';
import PlannerCell from '../components/PlannerCell';
import Overlay from '../components/Overlay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { providers: [], days: [] };
  }

  componentDidMount() {
    const providers = _(sampleData.posts).map('provider').uniq().value();
    const days = range(15).map(n => moment().add(n, 'days'));
    this.setState({ providers, days });
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
            onClick={this.handleAboutClick.bind(this)}
            icon="question"
          />
          <AppHeaderButton
            href="#add-post"
            onClick={this.handleAddPostClick.bind(this)}
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
                  onPostSelect={this.handlePostSelect.bind(this)}
                />
              )}
            </PlannerRow>
          )}
        </PlannerTable>

        {this.state.overlayedComponent &&
          <Overlay onDismiss={this.handleOverlayDismiss.bind(this)}>
            {this.state.overlayedComponent}
          </Overlay>}
      </div>
    );
  }

  handleAboutClick(e) {
    e.preventDefault();
    // @todo
    this.setState({ overlayedComponent: <div /> });
  }

  handleAddPostClick(e) {
    e.preventDefault();
    // @todo
    this.setState({ overlayedComponent: <div /> });
  }

  handlePostSelect(e, post) {
    e.preventDefault();
    // @todo
    this.setState({ overlayedComponent: <div /> });
  }

  handleOverlayDismiss() {
    this.setState({ overlayedComponent: null });
  }
}

export default App;
