import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Tabs from '../src/Tabs';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Tabs />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sports To Do
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Copyright />
      </Box>
    </Container>
  );
}
