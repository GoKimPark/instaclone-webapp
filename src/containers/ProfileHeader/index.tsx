import { Avatar, Box as MuiBox } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import React from 'react';
import styled from 'styled-components';
import GridContainer from '~/components/Grid/GridContainer';
import GridItem from '~/components/Grid/GridItem';

const Box = styled(MuiBox)(spacing);

const HeaderContainer = styled(GridContainer)`
  margin-bottom: 44px;
`;

const HeaderAvatarSection = styled(GridItem)`
  margin-right: 30px;
`;

const HeaderAvatar = styled(Avatar)`
  margin-left: auto;
  margin-right: auto;
`;

const H2 = styled.h2`
  margin-top:0;
  margin-bottom: 0;
`;

const ProfileHeader = () => {
  return (
    <HeaderContainer>
      <HeaderAvatarSection xs={4}>
        <HeaderAvatar 
          style={{height: '150px', width: '150px'}}
          src='https://avatars.githubusercontent.com/u/60098657?v=4'
        />
      </HeaderAvatarSection>
      <GridItem xs={8}>
        <GridContainer>
          <GridItem xs={12} style={{marginBottom: '20px'}}>
            <H2>park.jinsu.5</H2>
          </GridItem>
          <GridItem xs={12} style={{marginBottom: '20px'}}>
            <Box display="flex" flexDirection="row">
              <Box mr={5}>게시물 <b>111</b></Box>
              <Box mr={5}>팔로워 <b>93</b></Box>
              <Box mr={5}>팔로우 <b>152</b></Box>
            </Box>
          </GridItem>
          <GridItem xs={12}>
            <b>Park Jinsu</b><br />
            기록
          </GridItem>
        </GridContainer>
      </GridItem>
    </HeaderContainer>
  );
};

export default ProfileHeader;
