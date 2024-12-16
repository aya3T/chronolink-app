import { HStack, Stack } from '@chakra-ui/react'
import { BiHome } from 'react-icons/bi'
import { MdListAlt, MdOutlineInput } from 'react-icons/md'
import { TbCalendarPlus } from 'react-icons/tb'

import { NavIcon } from './NavIcon'

export function Navigation({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Stack h="100vh" pos="relative">
      {children}
      <HStack
        w="100vw"
        h="100px"
        bg="teal"
        pos="absolute"
        bottom={0}
        justify="space-around"
        color="white"
      >
        <NavIcon name="home" path="/home" iconSize="30px">
          <BiHome />
        </NavIcon>
        <NavIcon name="create" path="/event/create" iconSize="30px">
          <TbCalendarPlus />
        </NavIcon>
        <NavIcon name="list" path="/event/list" iconSize="30px">
          <MdListAlt />
        </NavIcon>
        <NavIcon name="input" path="/event/input" iconSize="30px">
          <MdOutlineInput />
        </NavIcon>
      </HStack>
    </Stack>
  )
}
