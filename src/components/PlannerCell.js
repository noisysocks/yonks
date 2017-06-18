import React from 'react';
import styled from 'styled-components';
import { PLANNER_BORDER } from '../constants/colors';
import { APP_HEADER_HEIGHT, PLANNER_HEADER_HEIGHT } from '../constants/sizes';

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
          <li key={post.title}>
            <Link
              href={`#post/${post.id}`}
              title={post.title}
              onClick={e => {
                e.preventDefault();
                onPostSelect(post);
              }}
            >
              {post.title}
            </Link>
          </li>
        )}
      </List>
    </Cell>
  );
}

export default PlannerCell;
