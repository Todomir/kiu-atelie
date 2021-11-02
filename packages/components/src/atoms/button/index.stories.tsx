import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, Icon } from '@/atoms'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Melrose = Template.bind({})

Melrose.args = {
  color: 'melrose',
  children: 'Button',
}

export const FreshAir = Template.bind({})

FreshAir.args = {
  color: 'freshAir',
  children: 'Button',
}

export const GoldenrodYellow = Template.bind({})

GoldenrodYellow.args = {
  color: 'goldenrodYellow',
  children: 'Button',
}

export const AeroGreen = Template.bind({})

AeroGreen.args = {
  color: 'aeroGreen',
  children: 'Button',
}

export const SpaceDark = Template.bind({})

SpaceDark.args = {
  color: 'spaceDark',
  children: 'Button',
}

export const WithRightIcon = Template.bind({})

WithRightIcon.args = {
  children: 'Button With Icon',
  rightIcon: <Icon name="chevron-right" />,
}

export const WithLeftIcon = Template.bind({})

WithLeftIcon.args = {
  children: 'Button With Icon',
  leftIcon: <Icon name="chevron-left" />,
}
