import React from 'react';
import { Box, Flex } from 'tailwindcss-styled-components';

import NavBar from './NavBar';
import ToTop from './ToTop';
import UserCard from './UserCard';
import UserTabs from './UserTabs';
import Footer from './Footer';

export const UserProfile = () => {
  return (
    <Box id="bg-color" bgColor="#2C394B">
      <Box id="header">
        <NavBar />
      </Box>
      <ToTop />
      <Flex className="profile-container">
        <UserCard />
        <Box className="profile-content" ml="60px" w="60%">
          <UserTabs />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};
