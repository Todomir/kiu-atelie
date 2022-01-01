export type InputProps = {
  label: string;
  helperText?: string;
  icon?: React.ReactNode;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
