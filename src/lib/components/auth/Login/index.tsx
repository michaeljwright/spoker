import {
  Grid,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';

import SignInProviders from '~/lib/components/auth/SignInProviders';

const Login = () => {
  return (
    <ModalContent>
      <ModalHeader>
        <Heading bgGradient="linear(to-br, teal.200, blue.600)" bgClip="text">
          Login
        </Heading>

        <ModalCloseButton />
      </ModalHeader>

      <ModalBody>
        <Grid gap={4}>
          <SignInProviders />
        </Grid>
      </ModalBody>
      <ModalFooter>
        <br />
      </ModalFooter>
    </ModalContent>
  );
};

export default Login;
