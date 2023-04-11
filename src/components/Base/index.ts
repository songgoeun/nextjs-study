import styled from 'styled-components';

export * from './flex';
export { default as Spacer } from './spacer';
export * from './BasePageComponent';
export * from './BaseHeaderComponent';

export const BaseBodyContainer = styled.div`
  width: 100%;
  height: 755px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
