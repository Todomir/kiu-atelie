import { Meta, Story } from "@storybook/react";
import React from "react";

import { Icon, Input } from "@/components";
import type { InputProps } from "@/components/forms/input";

const meta: Meta = {
  title: "Atoms/Input",
  component: Input,
};

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Input",
  placeholder: "Input",
};

export const DefaultWithIcon = Template.bind({});

DefaultWithIcon.args = {
  label: "Input with icon",
  placeholder: "Input with icon",
  icon: <Icon name="lock" />,
};

export const DefaultWithHelperText = Template.bind({});

DefaultWithHelperText.args = {
  label: "Input with helper text",
  placeholder: "Input with helper text",
  helperText: "Lorem ipsum dolor sit amet",
};

export const DefaultWithError = Template.bind({});

DefaultWithError.args = {
  label: "Input with error",
  placeholder: "Input with error",
  error: "Lorem ipsum dolor sit amet",
};
