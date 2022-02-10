import { Flex, Input, Icon } from "@chakra-ui/react"

import { RiSearchLine } from 'react-icons/ri'

// two ways to build forms in react
// - controlled components (ex: const [search, setSearch] = useState(''))
// - uncontrolled components (ex: const searchInputRef - useRef<HTMLInputElement>(null) -> searchInputRef.current.value // null because initially this ref will have no element inside it and from the moment the input is built into the screen, then the ref will receive the input within it

export function Search() {
  return (
    <Flex 
      as="label" // as we want to put an icon together with an 'input', we style the element that is around the two as if it were an 'input' and we put as 'label' so that if the person clicks on the icon, the 'input' also receives the focus (html hack)
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input 
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}