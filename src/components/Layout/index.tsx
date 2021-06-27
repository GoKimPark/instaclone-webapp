import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from '../NavBar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const LayoutBody = styled.div`
  padding: 30px 20px 0;
`;

const Layout = ({ children }: any) => (
  <>
    <GlobalStyle />
    <NavBar />
    <LayoutBody>
      {children}
    </LayoutBody>
  </>
);

export default Layout;
