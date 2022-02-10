import { ElementType } from "react";

import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; // uses this type when passing the name/reference of a component (example: <Icon as={RiDashboardLine} />) and not the declaration of a component (example: <Icon as={<RiDashboardLine />} />)
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}