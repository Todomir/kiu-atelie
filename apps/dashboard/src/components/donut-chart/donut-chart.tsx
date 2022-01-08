/* eslint-disable security/detect-object-injection */
import { css, Text } from '@kiuatelie/ui'
import { Group } from '@visx/group'
import { Pie } from '@visx/shape'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { brlConverter } from '@/utils/functions'

import * as S from './donut-chart.styles'
import { Data } from './donut-chart.types'
import { Legend } from './legend'
import { colors } from './shared/constants'

const data: Data[] = [
  {
    description: 'Bloco Anotações 50fls Gato',
    id: '0193',
    sales: 5342,
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

const createTextContent = (d: Data) => {
  if (d.total) {
    return brlConverter(d.total * d.sales)
  }
  if (d.salePrice) {
    return brlConverter(d.salePrice * d.sales)
  }

  return null
}
export const DonutChart = () => {
  const width = 245

  const [active, setActive] = useState<Data | null>(null)

  return (
    <S.PieWrapper>
      <svg width={width} height={width}>
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
                    aria-describedby={`price-${arc.data.id}`}
                    initial={false}
                    animate={{ d: pie.path(arc) as string }}
                    className={createPieClass(index)()}
                    d={pie.path(arc) as string}
                  />
                </g>
              ))
            }
          </Pie>
          <AnimatePresence>
            {active && (
              <motion.text
                role="alert"
                aria-live="assertive"
                id={`price-${active.id}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                textAnchor="middle"
                className={css({
                  fill: '$colors$spaceDark900',
                  fontSize: '$md',
                  fontWeight: '$bold',
                })()}
              >
                {createTextContent(active) || ''}
              </motion.text>
            )}
          </AnimatePresence>
        </Group>
      </svg>
      <Legend<Data>
        identifier="id"
        data={data}
        active={active}
        setActive={setActive}
        legend={d => `${d.description} | ${d.id}`}
      >
        {d => (
          <>
            <Text aria-live="polite" css={{ marginTop: '$8' }}>
              <strong>Quantidade: </strong>
              {d.sales} unidades vendidas
            </Text>
            {d.salePrice && (
              <Text>
                <strong>Preço de venda: </strong>
                {brlConverter(d.salePrice)}
              </Text>
            )}
          </>
        )}
      </Legend>
    </S.PieWrapper>
  )
}
