import { Meta, Story } from '@storybook/react'

import { Icon, Input } from '@/atoms'
import { Props as InputProps } from '@/atoms/inputs/input'

const meta: Meta = {
  title: 'Atoms/Input',
  component: Input,
}

export default meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Input',
  placeholder: 'Input',
}

export const DefaultWithIcon = Template.bind({})

DefaultWithIcon.args = {
  label: 'Input with icon',
  placeholder: 'Input with icon',
  icon: <Icon name="lock" />,
}
