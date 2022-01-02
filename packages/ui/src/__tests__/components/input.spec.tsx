import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import React from 'react'

import { Icon, Input } from '@/components'

describe('<Input />', () => {
  test('should render', () => {
    render(<Input label="Input" name="input" />)
    const input = screen.getByLabelText(/input/i)

    expect(input).toBeInTheDocument()
  })

  test('should be interactive', () => {
    render(<Input label="Input" name="input" />)
    const input = screen.getByLabelText(/input/i)

    user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')

    user.clear(input)
    expect(input).toHaveValue('')
  })

  test('should execute onChange', () => {
    const onChange = jest.fn()
    render(<Input label="Input" name="input" onChange={onChange} />)
    const input = screen.getByLabelText(/input/i)

    user.type(input, 'Hello')
    expect(onChange).toHaveBeenCalled()
  })

  test('should render with icon', () => {
    render(<Input label="Input" name="input" icon={<Icon name="trashcan" />} />)

    const icon = screen.getByRole('img')
    const input = screen.getByLabelText(/input/i)

    expect(icon).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  test('should render with helper text', () => {
    render(<Input label="Input" name="input" helperText="Lorem ipsum" />)

    const helperText = screen.getByTestId('input-helper')
    const input = screen.getByLabelText(/input/i)

    expect(helperText).toBeInTheDocument()
    expect(helperText).toHaveTextContent(/lorem ipsum/i)
    expect(input).toBeInTheDocument()
  })

  test('should render error correctly', () => {
    render(<Input label="Input" name="input" error="Lorem ipsum" />)

    const error = screen.getByRole('alert')
    const input = screen.getByLabelText(/input/i)
    const wrapper = screen.getByTestId('input-wrapper')

    expect(error).toBeInTheDocument()
    expect(error).toHaveTextContent(/lorem ipsum/i)
    expect(input).toBeInTheDocument()
    expect(wrapper).toHaveAttribute('data-invalid', 'true')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  test('should render with error and helper text', () => {
    render(
      <Input
        label="Input"
        name="input"
        error="Lorem ipsum"
        helperText="Hello"
      />
    )

    const error = screen.getByRole('alert')
    const helperText = screen.getByTestId('input-helper')
    const input = screen.getByLabelText(/input/i)
    const wrapper = screen.getByTestId('input-wrapper')

    expect(error).toBeInTheDocument()
    expect(error).toHaveTextContent(/lorem ipsum/i)
    expect(helperText).toBeInTheDocument()
    expect(helperText).toHaveTextContent(/hello/i)
    expect(input).toBeInTheDocument()
    expect(wrapper).toHaveAttribute('data-invalid', 'true')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })
})
