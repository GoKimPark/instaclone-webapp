import { Divider } from '@material-ui/core';
import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import ProfileHeader from '~/containers/ProfileHeader';

const PageWrapper = styled.div`
  padding-right: 25vw;
  padding-left: 25vw;
`;

const ProfilePage: NextPage = () => (
  <PageWrapper>
    <ProfileHeader />
    <Divider variant="fullWidth" />
    <div>Hello World! Here is Profile Page</div>
  </PageWrapper>
);

export default ProfilePage;
