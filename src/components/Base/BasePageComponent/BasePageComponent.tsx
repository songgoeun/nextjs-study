import React from 'react';
import { BasePageContainer } from './styles';

interface BasePageComponentProps {
  children?: React.ReactNode;
}
const BasePageComponent: React.FC<BasePageComponentProps> = ({ children }) => {
  return <BasePageContainer>{children}</BasePageContainer>;
};

export default BasePageComponent;
