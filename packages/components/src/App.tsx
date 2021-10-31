import { Heading, Text } from '@/atoms'
import { globalStyles } from '@/styles'

export default function App() {
  globalStyles()
  return (
    <div>
      <Heading>Hello World</Heading>
      <Text>Programmed to work and not to feel</Text>
    </div>
  )
}
