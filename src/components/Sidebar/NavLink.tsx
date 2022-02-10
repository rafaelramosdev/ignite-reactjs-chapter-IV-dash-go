import { ElementType } from "react";

import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; // uses this type when passing the name/reference of a component (example: <Icon as={RiDashboardLine} />) and not the declaration of a component (example: <Icon as={<RiDashboardLine />} />)
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}