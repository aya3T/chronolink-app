import { Stack, VStack, Text } from '@chakra-ui/react'

export default function RoomList() {
  return (
    <Stack>
      <VStack h="80px" bgColor="teal" justify="center">
        <Text color="white" fontSize={{ base: '3xl', md: '5xl' }}>
          Chronolink
        </Text>
      </VStack>
      <Stack padding="30px">
        <Text>イベント一覧</Text>
      </Stack>
    </Stack>
  )
}
