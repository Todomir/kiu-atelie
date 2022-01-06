/* eslint-disable security/detect-object-injection */
import { css } from '@kiuatelie/ui'
import { Group } from '@visx/group'
import { Pie } from '@visx/shape'
import { motion } from 'framer-motion'
import { useState } from 'react'

import * as S from './donut-chart.styles'

type Data = {
  description: string
  id: string
  sales: number
  buyPrice?: number
  salePrice?: number
  total?: number
}

const colors = [
  '$colors$melrose400',
  '$colors$freshAir400',
  '$colors$aeroGreen400',
  '$colors$goldenrodYellow400',
  '$colors$spaceDark200',
]

const data: Data[] = [
  {
    description: 'Bloco Anotações 50fls Gato',
    id: '0193',
    sales: 2342,
    buyPrice: 4.07,
    salePrice: 14.9,
  },
  {
    description: 'Bloco Anotação',
    id: '6917',
    sales: 1234,
    buyPrice: 3.09,
    salePrice: 8.9,
  },
  {
    description: 'Bloco Anotação',
    id: '6924',
    sales: 1000,
    buyPrice: 2.99,
    salePrice: 8.9,
  },
  {
    description: 'Mini Bloco Papel',
    id: '4428',
    sales: 232,
    buyPrice: 1.99,
    salePrice: 8.9,
  },
  {
    description: 'Outros',
    id: '0000',
    sales: 100,
    total: 129.93,
  },
]

// data accessors
const getSales = (d: Data) => d.sales

const createPieClass = (index: number) =>
  css({
    fill: colors[index],
    '&:focus': {
      outline: 'none',
    },
  })

export const DonutChart = () => {
  const width = 245

  const [active, setActive] = useState<Data | null>(null)

  return (
    <div>
      <svg width={width + 100} height={width + 100}>
        <Group top={width / 2} left={width / 2}>
          <Pie<Data>
            data={data}
            pieValue={getSales}
            outerRadius={width / 2}
            innerRadius={({ data: d }) => {
              const size = active && active.id === d.id ? 40 : 20
              const half = width / 2
              return half - size
            }}
          >
            {pie =>
              pie.arcs.map((arc, index) => (
                <g
                  key={arc.data.id}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(arc.data)}
                  onBlur={() => setActive(null)}
                >
                  <motion.path
                    initial={false}
                    animate={{ d: pie.path(arc) as string }}
                    className={createPieClass(index)()}
                    d={pie.path(arc) as string}
                    tabIndex={0}
                  />
                </g>
              ))
            }
          </Pie>
        </Group>
      </svg>
      <aside>
        {data.map((d, index) => (
          <S.LegendWrapper key={`items-${d.id}`}>
            <S.ProductIndicator
              className={css({
                backgroundColor: colors[index],
              })()}
            />
            <S.Legend>
              {d.description} {d.id !== '0000' && `| ${d.id}`}
            </S.Legend>
          </S.LegendWrapper>
        ))}
      </aside>
    </div>
  )
}
