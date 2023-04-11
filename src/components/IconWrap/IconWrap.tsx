import React, { memo } from 'react';
import { IconContainer } from './styles';

interface IconWrapProps {
  icon: React.ReactNode;
  color?: string;
  size?: number;
  onClick?: () => void;
}
const IconWrap: React.FC<IconWrapProps> = ({ icon, color, size, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <IconContainer onClick={handleClick} color={color} size={size}>
      {icon}
    </IconContainer>
  );
};

export default memo(IconWrap);
