'user client'

import { Button, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack>
      <Text>Chronolink</Text>
      <Button>ルームを作る</Button>
      <Button>ルームを検索する</Button>
      <Button>日程を登録する</Button>
    </Stack>
  )
}
