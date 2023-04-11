import { BR, H3R } from '@/theme';
import React from 'react';
import { BasePageHeader, PageHeaderSection, PageHeaderTitle } from './styles';
import Spacer from '../spacer';
import { FlexRow, IconWrap } from '@/components';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface BaseHeaderComponentProps {
  pageName: string;
  viewName: string;
  child?: React.ReactNode;
  showBackBtn?: boolean;
  onBackBtnClick?: () => void;
}
const BaseHeaderComponent: React.FC<BaseHeaderComponentProps> = ({
  pageName,
  viewName,
  child,
  showBackBtn = false,
  onBackBtnClick,
}) => {
  const handleBackBtnClick = () => {
    if (showBackBtn && onBackBtnClick) {
      onBackBtnClick();
    }
  };

  return (
    <BasePageHeader>
      <PageHeaderSection>
        <BR color="rgba(0, 0, 0, 0.45)">{pageName}</BR>
        <Spacer space={8} vertical />
        <BR>{'/'}</BR>
        <Spacer space={8} vertical />
        <BR>{viewName}</BR>
      </PageHeaderSection>
      <Spacer space={8} />
      <PageHeaderTitle>
        <FlexRow crossAxis="center">
          {showBackBtn && (
            <>
              <IconWrap onClick={handleBackBtnClick} icon={<ArrowLeftOutlined />} />
              <Spacer space={17} vertical />
            </>
          )}
          <H3R>{viewName}</H3R>
        </FlexRow>
        <>{child}</>
      </PageHeaderTitle>
    </BasePageHeader>
  );
};

export default BaseHeaderComponent;
