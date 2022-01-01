import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";

import { Icon } from "@/components";

import { Password } from "../password";

describe("<Password />", () => {
  test("should render", () => {
    render(<Password label="Password" name="password" />);
    const password = screen.getByLabelText(/password/i);

    expect(password).toBeInTheDocument();
  });

  test("should be interactive", () => {
    render(<Password label="Password" name="password" />);
    const password = screen.getByLabelText(/password/i);

    user.type(password, "Hello");
    expect(password).toHaveValue("Hello");

    user.clear(password);
    expect(password).toHaveValue("");
  });

  test("should execute onChange", () => {
    const onChange = jest.fn();
    render(<Password label="Password" name="password" onChange={onChange} />);
    const password = screen.getByLabelText(/password/i);

    user.type(password, "Hello");
    expect(onChange).toHaveBeenCalled();
  });

  test("should render with icon", () => {
    render(
      <Password
        label="Password"
        name="password"
        icon={<Icon name="trashcan" />}
      />
    );

    const [icon] = screen.queryAllByRole("img");
    const password = screen.getByLabelText(/password/i);

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-icon", "trashcan");
    expect(password).toBeInTheDocument();
  });

  test("should render with helper text", () => {
    render(
      <Password label="Password" name="password" helperText="Lorem ipsum" />
    );

    const helperText = screen.getByTestId("password-helper");
    const password = screen.getByLabelText(/password/i);

    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(/lorem ipsum/i);
    expect(password).toBeInTheDocument();
  });

  test("should render with error", () => {
    render(<Password label="Password" name="password" error="Lorem ipsum" />);

    const error = screen.getByRole("alert");
    const password = screen.getByLabelText(/password/i);
    const wrapper = screen.getByTestId("password-wrapper");

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(/lorem ipsum/i);
    expect(password).toBeInTheDocument();
    expect(wrapper).toHaveAttribute("data-invalid", "true");
    expect(password).toHaveAttribute("aria-invalid", "true");
  });

  test("should render with error and helper text", () => {
    render(
      <Password
        label="Password"
        name="password"
        error="Lorem ipsum"
        helperText="Hello"
      />
    );

    const error = screen.getByRole("alert");
    const helperText = screen.getByTestId("password-helper");
    const password = screen.getByLabelText(/password/i);
    const wrapper = screen.getByTestId("password-wrapper");

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(/lorem ipsum/i);
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(/hello/i);
    expect(password).toBeInTheDocument();
    expect(wrapper).toHaveAttribute("data-invalid", "true");
    expect(password).toHaveAttribute("aria-invalid", "true");
  });

  test("should be able to toggle password visibility", () => {
    render(<Password label="Password" name="password" />);
    const password = screen.getByLabelText(/password/i);
    const toggle = screen.getByRole("switch");

    expect(password).toHaveAttribute("type", "password");
    user.click(toggle);
    expect(password).toHaveAttribute("type", "text");
  });
});
