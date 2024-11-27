'user client'
import { Button, Heading, VStack } from '@chakra-ui/react'

import { createEvent } from '@/repository/event/actions'

export default function Initial() {
  async function onClick() {
    await createEvent({
      name: 'sample',
      desc: '説明です',
      owner: '000',
      startDate: '20241127',
      endDate: '20241128',
      participants: ['000'],
      eventNumber: '00000000',
    })
  }

  return (
    <VStack h="100vh" align="center" justify="center" spaceY="md">
      <Heading size="7xl" position="static">
        Chronolink
      </Heading>
      <Button colorScheme="teal" onClick={onClick}>
        ログイン
      </Button>
      <Button>新規登録</Button>
    </VStack>
  )
}
