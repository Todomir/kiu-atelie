import { Meta, Story } from '@storybook/react'

import { Link, Props as LinkProps } from '.'

const meta: Meta = {
  title: 'Atoms/Link',
  component: Link,
  args: {
    children: 'Link',
    href: 'https://www.example.com',
  },
}

export default meta

const Template: Story<LinkProps> = args => <Link {...args} />

export const Default = Template.bind({})

Default.args = {
  underline: true,
}
