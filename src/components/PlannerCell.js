import styled from 'styled-components';
import { PLANNER_BORDER } from './colors';
import { APP_HEADER_HEIGHT, PLANNER_HEADER_HEIGHT } from './sizes';

export default styled.td`;
  border-bottom: 1px solid ${PLANNER_BORDER};
  border-left: 1px solid ${PLANNER_BORDER};
  height: calc((100vh - ${APP_HEADER_HEIGHT} - ${PLANNER_HEADER_HEIGHT}) / 7);
  padding: 5px;
  vertical-align: top;
`;
