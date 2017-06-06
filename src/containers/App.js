import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import AppHeader from '../components/AppHeader';
import AppHeaderButton from '../components/AppHeaderButton';
import PlannerTable from '../components/PlannerTable';
import PlannerRow from '../components/PlannerRow';
import PlannerCell from '../components/PlannerCell';
import sampleData from '../sampleData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { providers: [], days: [] };
  }

  componentDidMount() {
    const providers = _(sampleData.posts).map('provider').uniq().value();
    const days = _.range(15).map(n => moment().add(n, 'days'));
    this.setState({ providers, days });
  }

  findPosts(provider, day) {
    return _.filter(
      sampleData.posts,
      post => post.provider === provider && moment(post.date).isSame(day, 'day')
    );
  }

  render() {
    return (
      <div>
        <AppHeader>
          <AppHeaderButton href="#about" icon="question" />
          <AppHeaderButton href="#add-event" icon="plus" />
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
      </div>
    );
  }

  handlePostSelect(e, post) {
    e.preventDefault();
    console.log(post);
  }
}

export default App;
