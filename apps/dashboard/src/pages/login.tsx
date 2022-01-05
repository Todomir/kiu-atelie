import { Button, Heading, Icon, Input, Password, Text } from '@kiuatelie/ui'
import { NextPage } from 'next'

import * as S from '@/styles/login.styles'

const Login: NextPage = () => (
  <S.Container>
    <S.Section
      css={{
        '@media screen and (max-width: 420px)': {
          px: '$24',
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
          name="email"
          icon={<Icon label="Usuário" name="user" />}
          label="Email"
          placeholder="email@email.com"
        />
        <Password
          name="password"
          icon={<Icon label="Senha" name="lock" />}
          label="Senha"
          placeholder="Sua senha"
          helperText="É segredo. Não contaremos para ninguém."
        />
        <Button
          type="submit"
          full
          rightIcon={<Icon label="Fazer login" name="chevron-right" />}
        >
          Fazer login
        </Button>
      </S.Form>
    </S.Section>
  </S.Container>
)

export default Login
