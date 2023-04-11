import { BR, F1, H3R } from '@/theme';
import color from '@/theme/color';
import { FrownOutlined, LogoutOutlined } from '@ant-design/icons';
import React, { memo } from 'react';
import { Spacer } from '../Base';
import Image from 'next/image';
import {
  HeaderContainer,
  HeaderInfoWrap,
  HeaderLogoWrap,
  HeaderProjectTitle,
  HeaderTitle,
  HelpButton,
  Img,
  ImgWrap,
  SignOutButton,
  Span,
  UserButton,
  UserIcon,
} from './styles';
import { Dropdown, MenuProps, Space } from 'antd';
// import { useDispatch } from 'react-redux';
// import { logout } from '@/flux/slices/auth.slice';
// import { useAuth, useUser } from '@/hooks';
// import { useNavigate } from 'react-router-dom';
// import { SessionService } from '@/service';
// import { clearAiState, clearCoreState, clearViewState, useProjectSelector } from '@/flux';
// import { ProjectLabelChip } from '../ProjectLabelChip';

const Header: React.FC = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user } = useUser();
  // const project = useProjectSelector();
  // const { signOut } = useAuth();

  const handleSignOutClick = () => {
    // dispatch(logout());
    // signOut();
    // navigate('/');
    // location.reload();
  };

  const handleLogoClick = () => {
    // SessionService.clearProjectId();
    // dispatch(clearCoreState());
    // dispatch(clearViewState());
    // dispatch(clearAiState());
    // navigate('/');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <SignOutButton onClick={handleSignOutClick}>
          <Space size={`middle`}>
            <LogoutOutlined />
            <BR>{`Logout`}</BR>
          </Space>
        </SignOutButton>
      ),
    },
  ];

  return (
    <HeaderContainer>
      <HeaderLogoWrap>
        <Space>
          <ImgWrap onClick={handleLogoClick}>
            {/* loginLogo */}
            {/* <Img src="/assets/loginLogo.jpg" /> */}
            <Image src="/assets/loginLogo.jpg" alt="logo" width={26} height={30} />
          </ImgWrap>
          <HeaderTitle>
            {`Hubble`}
            <Spacer vertical space={10} />
            <Span>{`ML Studio`}</Span>
          </HeaderTitle>
          {/* {project ? (
            <HeaderProjectTitle onClick={() => navigate('/project')}>
              <H3R color={color.rtm[5]}>{project.title}</H3R>
              <Spacer vertical space={12} />
              <ProjectLabelChip type={project.type} />
            </HeaderProjectTitle>
          ) : (
            <HeaderTitle>
              {`Hubble`}
              <Spacer vertical space={10} />
              <Span>{`ML Studio`}</Span>
            </HeaderTitle>
          )} */}
        </Space>
      </HeaderLogoWrap>
      <HeaderInfoWrap>
        <Space>
          <HelpButton>
            <FrownOutlined style={{ color: color.rtm[5] }} />
            <F1 color={color.rtm[5]}>{`도움이 필요하신가요?`}</F1>
          </HelpButton>
          {/* {user && (
            <Dropdown menu={{ items }} placement="bottom">
              <UserButton>
                <UserIcon />
                <Spacer space={11} vertical />
                <BR>{user.username}</BR>
              </UserButton>
            </Dropdown>
          )} */}
        </Space>
      </HeaderInfoWrap>
    </HeaderContainer>
  );
};

export default memo(Header);
