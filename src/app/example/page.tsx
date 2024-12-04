'use client'

import { useEffect, useState } from 'react'

import { For, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { CustomButton } from './CustomButton'

import { Slider } from '@/components/ui/slider'

export default function ExamplePage() {
  const [row, setRow] = useState<number>(6)
  const [col, setCol] = useState<number>(5)
  const [array, setArray] = useState<number[]>(
    [...Array(row * col)].map((_, i) => i),
  )

  useEffect(() => {
    setArray([...Array(row * col)].map((_, i) => i))
    console.log('変更')
  }, [row, col])

  return (
    <VStack>
      <Heading size="3xl">TimeTable</Heading>
      <VStack>
        <Text>Row: {row}</Text>
        <Slider
          w="200px"
          min={1}
          max={10}
          step={1}
          value={[row]}
          onValueChange={(e) => setRow(e.value[0])}
        ></Slider>
        <Text>Col: {col}</Text>
        <Slider
          w="200px"
          min={1}
          max={10}
          step={1}
          value={[col]}
          onValueChange={(e) => setCol(e.value[0])}
        ></Slider>
      </VStack>
      <SimpleGrid columns={col} columnGap="2" rowGap="4">
        <For each={array}>
          {(item, index) => (
            <CustomButton key={index} item={(item + 1).toString()} />
          )}
        </For>
      </SimpleGrid>
    </VStack>
  )
}
