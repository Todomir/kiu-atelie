import React from 'react'

export type LegendProps<T> = {
  active: T | null
  setActive: (active: T | null) => void
  data: T[]
  identifier: keyof T
  children: (active: T) => React.ReactNode
  legend: (data: T) => React.ReactNode
}
