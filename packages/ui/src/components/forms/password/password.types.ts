export type PasswordProps = {
  label: string;
  icon?: React.ReactNode;
  helperText?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
