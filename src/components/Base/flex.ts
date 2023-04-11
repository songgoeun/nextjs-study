import styled from 'styled-components';

interface FlexRowProps {
  width?: string;
  height?: string;
  mainAxis?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  crossAxis?: 'flex-start' | 'center' | 'flex-end';
  backgroundColor?: string;
}

interface FlexColumnProps {
  width?: string;
  height?: string;
  mainAxis?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  crossAxis?: 'flex-start' | 'center' | 'flex-end';
  backgroundColor?: string;
}
export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;
  width: ${({ width }) => (width ? `${width}` : 'none')};
  height: ${({ height }) => (height ? `${height}` : 'none')};
  justify-content: ${({ mainAxis }) => (mainAxis ? mainAxis : 'flex-start')};
  align-items: ${({ crossAxis }) => (crossAxis ? crossAxis : 'flex-start')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'none'};
`;

export const FlexColumn = styled.div<FlexColumnProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? `${width}` : 'none')};
  height: ${({ height }) => (height ? `${height}` : 'none')};
  justify-content: ${({ mainAxis }) => (mainAxis ? mainAxis : 'flex-start')};
  align-items: ${({ crossAxis }) => (crossAxis ? crossAxis : 'flex-start')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'none'};
`;
