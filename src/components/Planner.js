import React from 'react';
import moment from 'moment';
import PlannerTable from '../components/PlannerTable';
import PlannerRow from '../components/PlannerRow';
import PlannerCell from '../components/PlannerCell';

function getDays(offset = 0, limit = 15) {
  return [...Array(limit).keys()].map(n => moment().add(offset + n, 'days'));
}

function Planner({ data, onPostSelect }) {
  return (
    <PlannerTable columns={data.providers}>
      {getDays().map(day =>
        <PlannerRow key={day} title={day.format('ddd D')}>
          {data.providers.map(provider =>
            <PlannerCell
              key={provider}
              posts={data.getPosts(provider, day)}
              onPostSelect={onPostSelect}
            />
          )}
        </PlannerRow>
      )}
    </PlannerTable>
  );
}

export default Planner;