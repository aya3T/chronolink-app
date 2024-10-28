import { forwardRef } from 'react'

import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import { LuX } from 'react-icons/lu'

import type { ButtonProps as ChakraCloseButtonProps } from '@chakra-ui/react'

export type CloseButtonProps = ChakraCloseButtonProps

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
        {props.children ?? <LuX />}
      </ChakraIconButton>
    )
  },
)