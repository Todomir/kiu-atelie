import { Meta, Story } from '@storybook/react'

import { Icon, IconButton } from '@/atoms'
import { Props as IconButtonProps } from '@/atoms/icon-button'

const meta: Meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: {
    icon: <Icon name="menu-horizontal" />,
    'aria-label': 'Abrir menu de contexto',
  },
}

export default meta

const Template: Story<IconButtonProps> = args => <IconButton {...args} />

export const Melrose = Template.bind({})

Melrose.args = {
  color: 'melrose',
}

export const FreshAir = Template.bind({})

FreshAir.args = {
  color: 'freshAir',
}

export const GoldenrodYellow = Template.bind({})

GoldenrodYellow.args = {
  color: 'goldenrodYellow',
}

export const AeroGreen = Template.bind({})

AeroGreen.args = {
  color: 'aeroGreen',
}

export const SpaceDark = Template.bind({})

SpaceDark.args = {
  color: 'spaceDark',
}

export const WithTooltip = Template.bind({})

WithTooltip.args = {
  tooltip: 'Abrir menu de configurações',
}
