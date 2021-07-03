import React from 'react';
import { Box as MuiBox} from '@material-ui/core';
import styled from 'styled-components';

const Box = styled(MuiBox)`
  background-image: url("http://m.304coffee.co.kr/web/product/big/202009/6033ca04273160d61c407fadc69e588f.png");
  background-size: 100% 100%;
`;


const ProfileBody = () => {
  return (
    <>
      <MuiBox 
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mb="28px"
      >
        <Box height={280} width="100%" mr="28px" />
        <Box height={280} width="100%" mr="28px" />
        <Box height={280} width="100%" />
      </MuiBox>
      <MuiBox 
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mb="28px"
      >
        <Box height={280} width="100%" mr="28px" />
        <Box height={280} width="100%" mr="28px" />
        <Box height={280} width="100%" />
      </MuiBox>
      <MuiBox 
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mb="28px"
      >
        <Box height={280} width="100%" mr="28px" />
        <Box height={280} width="100%" mr="28px" />
        <Box height={280} width="100%" />
      </MuiBox>
    </>
  );
};

export default ProfileBody;
