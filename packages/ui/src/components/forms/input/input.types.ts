export type InputProps = {
  label: string
  name: string
  helperText?: string
  icon?: React.ReactNode
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>
