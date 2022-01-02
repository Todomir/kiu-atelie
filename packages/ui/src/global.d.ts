import '@testing-library/jest-dom/extend-expect'

declare global {
  type WithChildren<T = Record<string, unknown>> = T & {
    children?: React.ReactNode
  }
}

export {}
