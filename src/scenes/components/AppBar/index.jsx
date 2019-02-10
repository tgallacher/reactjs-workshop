import React from 'react';
import styled from 'react-emotion';

const Header = styled('header')``;
const ContentWrapper = styled('div')``;
const PageHeadingArea = styled('div')``;
const LogoutArea = styled('div')``;
const Logout = styled('button')``;

const AppBar = () => (
  <Header className="bg-white font-sans">
    <ContentWrapper className="flex max-w-4xl mx-auto h-10 items-center">
      <PageHeadingArea className="flex-1 text-grey-darker text-xl">
        Team Summary
      </PageHeadingArea>

      <LogoutArea>
        <Logout className="bg-red hover:bg-red-dark text-white font-bold py-2 px-2">
          <i className="fa fa-power-off" />
        </Logout>
      </LogoutArea>
    </ContentWrapper>
  </Header>
);

export default AppBar;
