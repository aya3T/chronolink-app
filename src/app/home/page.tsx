'user client'

import { Button, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { MdListAlt, MdOutlineInput } from 'react-icons/md'
import { TbCalendarPlus } from 'react-icons/tb'

import { NavIcon } from '@/components/navigation/NavIcon'

export default function Home() {
  return (
    <Stack h="100%">
      <VStack h="80px" bgColor="teal" justify="center">
        <Text color="white" fontSize={{ base: '3xl', md: '5xl' }}>
          Chronolink
        </Text>
      </VStack>
      <VStack align="center" justify="space-around" h="100%">
        <Link href="/event/create">
          <Button
            h="200px"
            w="200px"
            borderRadius="full"
            color="teal"
            bgColor="white"
            boxShadow="lg"
          >
            <NavIcon name="create" path="/event/create" iconSize="50px">
              <TbCalendarPlus />
            </NavIcon>
          </Button>
        </Link>
        <Link href="/event/list">
          <Button
            h="200px"
            w="200px"
            borderRadius="full"
            color="teal"
            bgColor="white"
            boxShadow="lg"
          >
            <NavIcon name="list" path="/event/list" iconSize="50px">
              <MdListAlt />
            </NavIcon>
          </Button>
        </Link>
        <Link href="/event/input">
          <Button
            h="200px"
            w="200px"
            borderRadius="full"
            color="teal"
            bgColor="white"
            boxShadow="lg"
          >
            <NavIcon name="input" path="/event/input" iconSize="50px">
              <MdOutlineInput />
            </NavIcon>
          </Button>
        </Link>
      </VStack>
    </Stack>
  )
}
