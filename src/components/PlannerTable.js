import React from 'react';
import styled from 'styled-components';
import { PLANNER_BACKGROUND, PLANNER_BORDER } from './colors';
import { APP_HEADER_HEIGHT, PLANNER_HEADER_HEIGHT } from './sizes';
import { MIDDLE } from './depths';

const Table = styled.table`
  border-collapse: collapse;
  margin-top: calc(${APP_HEADER_HEIGHT} + ${PLANNER_HEADER_HEIGHT});
  table-layout: fixed;

  & td, & th {
    max-width: calc((100vw - 100px) / ${props => props.numColumns});
    min-width: calc((100vw - 100px) / ${props => props.numColumns});
  }

  & td:first-child, & th:first-child {
    min-width: 100px;
  }

  & td:last-child, & th:last-child {
    min-width: inherit;
    width: calc((100vw - 100px) / ${props => props.numColumns});
  }
`;

const HeaderRow = styled.tr`
  background: ${PLANNER_BACKGROUND};
  position: fixed;
  top: 50px;
  z-index: ${MIDDLE};
`;

const HeaderCell = styled.th`
  border-bottom: 1px solid ${PLANNER_BORDER};
  border-left: 1px solid ${PLANNER_BORDER};
  height: ${PLANNER_HEADER_HEIGHT};
  line-height: 0;
  text-align: center;

  &:first-child {
    border-left: none;
  }
`;

function PlannerTable({ columns, children }) {
  return (
    <Table numColumns={columns.length}>
      <thead>
        <HeaderRow>
          <HeaderCell />
          {columns.map((column, key) =>
            <HeaderCell key={key}><b>{column}</b></HeaderCell>
          )}
        </HeaderRow>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  );
}

export default PlannerTable;
