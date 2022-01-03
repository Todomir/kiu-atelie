export type PasswordProps = {
  label: string
  name: string
  icon?: React.ReactNode
  helperText?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>
