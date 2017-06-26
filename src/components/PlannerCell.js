import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { APP_HEADER_HEIGHT, PLANNER_HEADER_HEIGHT } from '../constants/sizes';
import { PLANNER_BORDER } from '../constants/colors';

const Cell = styled.td`;
  border-bottom: 1px solid ${PLANNER_BORDER};
  border-left: 1px solid ${PLANNER_BORDER};
  height: calc((100vh - ${APP_HEADER_HEIGHT} - ${PLANNER_HEADER_HEIGHT}) / 7);
  padding: 5px;
  vertical-align: top;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function PlannerCell({ posts, onPostSelect }) {
  return (
    <Cell>
      <List>
        {posts.map(post =>
          <li key={post.id}>
            <Link
              href={`#post/${post.id}`}
              title={post.title}
              onClick={e => {
                e.preventDefault();
                onPostSelect(post);
              }}
            >
              <b>{moment(post.date).format('H:mm')}</b>
              &nbsp;
              {post.title}
            </Link>
          </li>
        )}
      </List>
    </Cell>
  );
}

PlannerCell.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPostSelect: PropTypes.func.isRequired,
};

export default PlannerCell;
