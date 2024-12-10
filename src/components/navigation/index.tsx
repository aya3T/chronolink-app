'use client'

import { HStack, Stack } from '@chakra-ui/react'
import { TiHome } from 'react-icons/ti'

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
        h="80px"
        bg="white"
        pos="absolute"
        bottom={0}
        justify="space-around"
      >
        <NavIcon name="home" path="/">
          <TiHome />
        </NavIcon>
        <NavIcon name="home" path="/">
          <TiHome />
        </NavIcon>
        <NavIcon name="home" path="/">
          <TiHome />
        </NavIcon>
        <NavIcon name="home" path="/">
          <TiHome />
        </NavIcon>
      </HStack>
    </Stack>
  )
}
