import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";

import { Button, Icon } from "@/components";

describe("<Button />", () => {
  test("should render", () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/button/i);
  });
  test("should execute onClick", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    const button = screen.getByRole("button");
    user.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  test("should render with icon", () => {
    const { rerender } = render(
      <Button rightIcon={<Icon name="trashcan" />}>Button</Button>
    );

    const rightIcon = screen.getByRole("img");
    const button = screen.getByRole("button");

    expect(rightIcon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/button/i);
    expect(button).toContainElement(rightIcon);

    rerender(<Button leftIcon={<Icon name="trashcan" />}>Button</Button>);

    const leftIcon = screen.getByRole("img");

    expect(leftIcon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/button/i);
    expect(button).toContainElement(leftIcon);
  });
});
