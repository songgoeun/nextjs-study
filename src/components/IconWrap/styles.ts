import styled from 'styled-components';

interface IconContainerProps {
  color?: string;
  size?: number;
}
export const IconContainer = styled.div<IconContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span > svg > path {
    fill: ${({ color }) => (color ? color : '')};
    color: ${({ color }) => (color ? color : '')};
  }

  & > span > svg {
    width: ${({ size }) => (size ? `${size}px` : '')};
    height: ${({ size }) => (size ? `${size}px` : '')};
  }
`;
