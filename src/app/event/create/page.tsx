'use client'

import { Button, Input, Stack, Text, VStack } from '@chakra-ui/react'

export default function CreateRoom() {
  return (
    <Stack>
      <VStack h="80px" bgColor="teal" justify="center">
        <Text color="white" fontSize={{ base: '3xl', md: '5xl' }}>
          Chronolink
        </Text>
      </VStack>
      <Stack padding="30px">
        <Text>イベント名:</Text>
        <Input />
        <Text>開始日:</Text>
        <Input />
        <Text>終了日:</Text>
        <Input />
        <Button maxW="100vw" colorScheme="teal" mt="30px" variant="outline">
          Submit
        </Button>
      </Stack>
    </Stack>
  )
}
