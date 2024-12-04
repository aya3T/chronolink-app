'use client'

import { useState } from 'react'

import { Button } from '@chakra-ui/react'

type Props = {
  item: string
}

export function CustomButton(props: Props) {
  const [selected, setSelected] = useState(false)

  function onClick() {
    setSelected(!selected)
  }
  return (
    <Button
      colorPalette={selected ? 'pink' : 'gray'}
      variant={selected ? 'solid' : 'surface'}
      onClick={onClick}
    >
      {props.item}
    </Button>
  )
}
