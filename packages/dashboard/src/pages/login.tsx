import { Button, Heading, Icon, Input, Password, Text } from '@kiuatelie/ui'
import { NextPage } from 'next'

import * as S from '@/styles/login.styles'

const Login: NextPage = () => (
  <S.Container>
    <S.Section
      css={{
        '@media screen and (max-width: 420px)': {
          px: '$6',
        },
      }}
    >
      <S.Header>
        <Heading size="xl">Fazer login</Heading>
        <Text css={{ color: '$spaceDark600' }}>
          Faça login usando sua conta
        </Text>
      </S.Header>
      <S.Form>
        <Input
          icon={<Icon name="user" />}
          label="Email"
          placeholder="email@email.com"
        />
        <Password label="Senha" placeholder="Sua senha" />
        <Button
          type="submit"
          size="full"
          rightIcon={<Icon name="chevron-right" />}
        >
          Fazer login
        </Button>
      </S.Form>
    </S.Section>
  </S.Container>
)

export default Login
