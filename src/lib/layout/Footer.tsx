import { Flex, Link, Text } from "@chakra-ui/react";

import ThemeToggle from "~/lib/layout/ThemeToggle";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="xs">
        {new Date().getFullYear()} -{" "}
        <Link href="https://pioneers.dev" isExternal>
          pioneers.dev
        </Link>
      </Text>
      <ThemeToggle />
    </Flex>
  );
};

export default Footer;
