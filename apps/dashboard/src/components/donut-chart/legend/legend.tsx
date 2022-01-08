/* eslint-disable security/detect-object-injection */
/* eslint-disable react/function-component-definition */
import { css } from '@kiuatelie/ui'
import { AnimatePresence, LayoutGroup } from 'framer-motion'

import { colors } from '../shared/constants'
import * as S from './legend.styles'
import type { LegendProps } from './legend.types'

export function Legend<T>({
  children,
  active,
  data,
  identifier,
  legend,
  setActive,
}: LegendProps<T>) {
  return (
    <aside>
      <LayoutGroup>
        {data.map((d, index) => (
          <S.LegendWrapper
            onClick={() => setActive(d)}
            onFocus={() => setActive(d)}
            onBlur={() => setActive(null)}
            key={`items-${String(d[identifier])}`}
          >
            <S.Product>
              <S.Legend tabIndex={0}>
                <S.ProductIndicator
                  className={css({
                    backgroundColor: colors[index],
                  })()}
                />
                {legend(d)}
              </S.Legend>
              <AnimatePresence>
                {active && active[identifier] === d[identifier] && (
                  <S.Details
                    key={`details-${String(d[identifier])}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {children(d)}
                  </S.Details>
                )}
              </AnimatePresence>
            </S.Product>
          </S.LegendWrapper>
        ))}
      </LayoutGroup>
    </aside>
  )
}
