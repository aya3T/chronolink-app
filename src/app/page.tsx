'use client'
import { Button, Heading, VStack } from '@chakra-ui/react'

import { createEvent } from '@/repository/event'

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
    <VStack h="100vh" align="center" justify="center" spaceY={10}>
      <Heading size={{ base: '5xl', md: '7xl' }} position="static" color="teal">
        Chronolink
      </Heading>
      <VStack w="240px" spaceY={2}>
        <Button w="full" colorPalette="teal">
          ログイン
        </Button>
        <Button
          w="full"
          colorPalette="teal"
          variant="surface"
          onClick={onClick}
        >
          新規登録
        </Button>
      </VStack>
    </VStack>
  )
}
