import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button, Icon } from '@/components'
import type { ButtonProps } from '@/components/button'
import { tokens } from '@/styles'

// trim numbers from the end of the string
const trimNumbers = (str: string) => str.replace(/\d+$/, '')

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(tokens.colors).map(key => trimNumbers(key)),
      control: {
        type: 'select',
      },
    },
  },
}

export default meta

const Template: Story<ButtonProps> = args => <Button {...args} />

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
  rightIcon: <Icon label="Icon of button" name="chevron-right" />,
}

export const WithLeftIcon = Template.bind({})

WithLeftIcon.args = {
  children: 'Button With Icon',
  leftIcon: <Icon label="Icon of button" name="chevron-left" />,
}
