import React from 'react';
import { Flex, Text, useTheme, PseudoBox } from '@chakra-ui/core';
import Link from './../Link';

const DynamicYear = new Date().getFullYear();

const TermsLink = () => {
  return (
    <Link variant="footer" to="/">
      Terms and Conditions
    </Link>
  );
};

const Copyright = () => {
  const theme = useTheme();
  return (
    <Flex w="full" justify="center" align="center">
      <Flex w={['80%', '80%', '80%', 'full']} textAlign="center">
        <Text
          fontSize="12px"
          fontFamily={theme.fonts.heading}
          color={theme.colors['rbb-white']}
          opacity={0.5}
        >
          Copyright &copy; {DynamicYear} Rebuild Black Businesses. All rights
          reserved. <TermsLink />
        </Text>
      </Flex>
    </Flex>
  );
};

export default Copyright;
