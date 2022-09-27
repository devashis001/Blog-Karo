import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">BLOG KARO</Typography>
        <Text variant="h5">
          This is an installable Blogging app that lets a user delve into a
          topic of choice and write a blog post, or read one of the already
          uploaded Blog posts. In order to write your very own Blog post, you
          can conveniently login using one of your social accounts, and start
          penning your thoughts!
          <br />
          <br />
          You can edit your Blog post at any time, as long as you're logged in.
          If you ever feel like your post is no longer a valid representation of
          your thoughts, you can also delete it at any instant of time. You can
          also provide your opinions about any post, in the comments' section of
          every post, anonymously!Your comment will always have a unique icon
          accompanying it.
          <br />
          <br />
          If you are interested, you can view some of my favorite projects here
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/devashis001"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Text>
        <Text variant="h5">
          Need something built or simply want to have chat? Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/devashis_gupta/"
              color="inherit"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Box>
          or send me an Email
          <Link
            href="mailto:devg619@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
