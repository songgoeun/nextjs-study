import color from '@/theme/color';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: white;
  border-bottom: 1px solid #dee2e6;
`;

export const HeaderLogoWrap = styled.div`
  width: 800px;
  height: 44px;
  display: flex;
  align-items: center;
`;

export const HeaderProjectTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderInfoWrap = styled.div`
  width: 332px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HelpButton = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  padding: 1px 8px;
  align-items: center;
  justify-content: space-between;
  background: ${color.volcano[0]};
  border: 1px solid ${color.volcano[2]};
  border-radius: 4px;
  cursor: pointer;
`;

export const UserButton = styled(Button)`
  display: flex;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  &:hover > div:last-child {
    color: ${color.rtm[5]};
  }
`;

export const UserIcon = styled(UserOutlined)`
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background: ${color.rtm[1]};

  & > svg {
    margin-top: 5px;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`;

export const ImgWrap = styled.div`
  width: 26px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
`;

export const SignOutButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 10px;
`;
