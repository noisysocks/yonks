import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import PlannerCell from '../components/PlannerCell';
import PlannerRow from '../components/PlannerRow';
import PlannerTable from '../components/PlannerTable';

function getDays(offset = 0, limit = 15) {
  return [...Array(limit).keys()].map(n => moment().add(offset + n, 'days'));
}

function Planner({ data, onPostSelect }) {
  return (
    <PlannerTable columns={data.platforms}>
      {getDays().map(day =>
        <PlannerRow key={day} title={day.format('ddd D')}>
          {data.platforms.map(platform =>
            <PlannerCell
              key={platform}
              posts={data.getPosts(platform, day)}
              onPostSelect={onPostSelect}
            />
          )}
        </PlannerRow>
      )}
    </PlannerTable>
  );
}

Planner.propTypes = {
  data: PropTypes.shape({
    platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
    getPosts: PropTypes.func.isRequired,
  }).isRequired,
  onPostSelect: PropTypes.func.isRequired,
};

export default Planner;
