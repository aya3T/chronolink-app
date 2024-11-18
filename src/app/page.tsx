import { Heading, Stack } from '@chakra-ui/react'

import { ColorModeButton } from '@/components/ui/color-mode'

export default function Home() {
  return (
    <Stack>
      <Heading>Sample</Heading>
      <ColorModeButton w={10} />
    </Stack>
  )
}
