import { Meta, Story } from '@storybook/react'

import { Icon, Password } from '@/atoms'
import { Props as PasswordProps } from '@/atoms/inputs/password'

const meta: Meta = {
  title: 'Atoms/Password',
  component: Password,
}

export default meta

const Template: Story<PasswordProps> = args => <Password {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Password',
  placeholder: 'Password',
}

export const DefaultWithIcon = Template.bind({})

DefaultWithIcon.args = {
  label: 'Password with icon',
  placeholder: 'Password with icon',
  icon: <Icon name="lock" />,
}

export const DefaultWithHelperText = Template.bind({})

DefaultWithHelperText.args = {
  label: 'Input with helper text',
  placeholder: 'Input with helper text',
  helperText: 'Lorem ipsum dolor sit',
}
