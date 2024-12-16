import { Heading, VStack } from '@chakra-ui/react'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export default async function Initial() {
  const user = await currentUser()

  return (
    <VStack h="100vh" align="center" justify="center" spaceY={10}>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Heading size={{ base: '5xl', md: '7xl' }} position="static" color="teal">
        Chronolink
      </Heading>
      <SignedIn>{user?.emailAddresses[0].emailAddress}</SignedIn>
    </VStack>
  )
}
