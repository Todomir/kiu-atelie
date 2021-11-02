import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Heading } from '@/atoms'

const meta: Meta<React.ComponentProps<typeof Heading>> = {
  title: 'Atoms/Heading',
  component: Heading,
}

export default meta

const Template: Story = args => <Heading {...args} />

const text = 'The quick brown fox jumped over the lazy dog.'

export const TripleExtraLarge = Template.bind({})

TripleExtraLarge.args = {
  size: '3xl',
  children: text,
}

export const DoubleExtraLarge = Template.bind({})

DoubleExtraLarge.args = {
  size: '2xl',
  children: text,
}

export const ExtraLarge = Template.bind({})

ExtraLarge.args = {
  size: 'xl',
  children: text,
}

export const Large = Template.bind({})

Large.args = {
  size: 'lg',
  children: text,
}

export const Medium = Template.bind({})

Medium.args = {
  size: 'md',
  children: text,
}
