'use client'

import { Button, Fieldset, Input, Stack } from '@chakra-ui/react'

import { Field } from '@/components/ui/field'

export default function Login() {
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>ログイン</Fieldset.Legend>
        <Fieldset.HelperText>入力してください。</Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field label="名前">
          <Input name="名前" />
        </Field>

        <Field label="メールアドレス">
          <Input name="メール" type="メール" />
        </Field>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start">
        ログイン
      </Button>
    </Fieldset.Root>
  )
}
