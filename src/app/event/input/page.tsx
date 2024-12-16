import { Input, Stack, Text, VStack } from '@chakra-ui/react'

export default function InputSchedule() {
  return (
    <Stack>
      <VStack h="80px" bgColor="teal" justify="center">
        <Text color="white" fontSize={{ base: '3xl', md: '5xl' }}>
          Chronolink
        </Text>
      </VStack>
      <Stack padding="30px">
        <Text>開始日:</Text>
        <Input />
        <Text>終了日:</Text>
        <Input />
      </Stack>
    </Stack>
  )
}
