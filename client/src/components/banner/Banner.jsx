import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 30px;
  background: #ffffff;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG KARO</Heading>
      <SubHeading>Give your imagination the word</SubHeading>
    </Image>
  );
};

export default Banner;
