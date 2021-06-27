import React from 'react';
import GridContainer from '../Grid/GridContainer';
import styled from 'styled-components';
import GridItem from '../Grid/GridItem';
import { 
  ExploreOutlined, 
  FavoriteBorder, 
  HomeOutlined, 
  RadioButtonUnchecked, 
  SendOutlined 
} from '@material-ui/icons';
import { Box } from '@material-ui/core';

const Container = styled(GridContainer)`
  height: 54px;
  backgroubnd-color: white;
  border-bottom: solid 0.5px;
  border-color: lightgray;
  padding-right: 25vw;
  padding-left: 25vw;
`;

const Item = styled(GridItem)`
  padding-left: 10px;
  padding-right: 10px;
  // border: solid 1px;
  text-align: center;
  align-self: center;
`;

const Brand = styled(GridItem)`
  align-self: center;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const IconBox = styled(Box)`
  margin-left: 1.2vw;
`;

const SearchField = styled.input`
  height: 25px;
  width: 205px;
  border: solid 1px lightgray;
  border-radius: 3px;
  background-color: rgba(var(--b3f,250,250,250),1);
  text-align: center;
`;

const NavBar = () => (
  <>
    <Container>
      <Brand md={4} sm={4} xs={4} style={{marginTop: "7px"}}>
        <Image
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </Brand>
      <Item md={4} sm={4} xs={4}>
        <SearchField placeholder="검색" />
      </Item>
      <Item md={4} sm={4} xs={4}>
        <Box 
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          <IconBox><HomeOutlined /></IconBox>
          <IconBox><SendOutlined /></IconBox>
          <IconBox><ExploreOutlined /></IconBox>
          <IconBox><FavoriteBorder /></IconBox>
          <IconBox><RadioButtonUnchecked /></IconBox>
        </Box>
      </Item>
    </Container>
  </>
);

export default NavBar;
