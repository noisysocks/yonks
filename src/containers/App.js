import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import PlannerTable from '../components/PlannerTable';
import PlannerRow from '../components/PlannerRow';
import PlannerCell from '../components/PlannerCell';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <PlannerTable columns={['Blog', 'Twitter', 'Facebook', 'Instagram', 'Pinterest']}>
          <PlannerRow title='Mon 1'>
            <PlannerCell>blog</PlannerCell>
            <PlannerCell>twitter</PlannerCell>
            <PlannerCell>facebook</PlannerCell>
            <PlannerCell>instagram</PlannerCell>
            <PlannerCell>pinterest</PlannerCell>
          </PlannerRow>
        </PlannerTable>
      </div>
    );
  }
}

export default App;
