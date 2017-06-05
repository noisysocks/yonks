import React from 'react';
import styled from 'styled-components';
import { PLANNER_BORDER } from './colors';

const HeaderCell = styled.th`
  border-bottom: 1px solid ${PLANNER_BORDER};
  height: calc((100vh - 50px - 1rem) / 7);
  padding: 5px;
  text-align: right;
  vertical-align: top;
`;

function PlannerRow({ title, children }) {
  return (
    <tr>
      <HeaderCell><b>{title}</b></HeaderCell>
      {children}
    </tr>
  );
}

export default PlannerRow;
