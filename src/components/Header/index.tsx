import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react'

import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'

import { Logo } from './Logo'
import { Search } from './Search'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"   
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation" // is a property for accessibility that basically means what this element does
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      { isWideVersion && <Search /> }

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}