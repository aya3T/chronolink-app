'use client'

import { Icon, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  name: string
  path: string
}

export function NavIcon(props: Props) {
  return (
    <Link href={props.path}>
      <VStack>
        <Icon>{props.children}</Icon>
        <Text>{props.name}</Text>
      </VStack>
    </Link>
  )
}
