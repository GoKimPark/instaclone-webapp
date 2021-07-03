import { Divider } from '@material-ui/core';
import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import ProfileBody from '~/containers/ProfileBody';
import ProfileHeader from '~/containers/ProfileHeader';

const PageWrapper = styled.div`
  padding-right: 25vw;
  padding-left: 25vw;
`;

const ProfilePage: NextPage = () => (
  <PageWrapper>
    <ProfileHeader />
    <Divider variant="fullWidth" style={{marginBottom: "28px"}} />
    <ProfileBody />
  </PageWrapper>
);

export default ProfilePage;
