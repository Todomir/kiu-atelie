import icons from './names'

export type IconProps = {
  size?: number
  label: string
  name: keyof typeof icons
}
