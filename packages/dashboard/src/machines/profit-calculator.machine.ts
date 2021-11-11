import { assign, createMachine } from 'xstate'

type ActionType =
  | { type: 'EDIT_BUY_PRICE'; value: number }
  | { type: 'EDIT_SELL_PRICE'; value: number }
  | { type: 'EDIT_PROFIT'; value: number }

type Context = {
  buyPrice: number
  sellPrice: number
  profit: number
}

const profitCalculatorMachine = createMachine<Context, ActionType>(
  {
    id: 'profit',
    initial: 'buy',
    context: {
      buyPrice: 0,
      sellPrice: 0,
      profit: 0,
    },
    states: {
      buy: {
        on: {
          EDIT_BUY_PRICE: {
            actions: ['updateBuyPrice'],
          },
          EDIT_SELL_PRICE: {
            target: 'price',
            actions: ['calculateProfit'],
          },
          EDIT_PROFIT: {
            target: 'profit',
            actions: ['calculateSellPrice'],
          },
        },
        exit: ['calculateProfit'],
      },
      price: {
        on: {
          EDIT_SELL_PRICE: {
            target: 'price',
            actions: ['calculateProfit'],
          },
          EDIT_BUY_PRICE: {
            target: 'buy',
            actions: ['updateBuyPrice'],
          },
          EDIT_PROFIT: {
            target: 'profit',
            actions: ['calculateSellPrice'],
          },
        },
      },
      profit: {
        on: {
          EDIT_SELL_PRICE: {
            target: 'price',
            actions: ['calculateProfit'],
          },
          EDIT_BUY_PRICE: {
            target: 'buy',
            actions: ['updateBuyPrice'],
          },
          EDIT_PROFIT: {
            target: 'profit',
            actions: ['calculateSellPrice'],
          },
        },
      },
    },
  },
  {
    actions: {
      updateBuyPrice: assign((_context, event) => ({ buyPrice: event.value })),
      calculateProfit: assign((context, event) => {
        if (event.value === 0) return { sellPrice: event.value, profit: 0 }
        const { sellPrice, buyPrice } = context
        const grossProfit = (event.value || sellPrice) - buyPrice
        const profit = ((grossProfit / buyPrice) * 100).toFixed(2)
        return { profit: Number(profit), sellPrice: event.value || sellPrice }
      }),
      calculateSellPrice: assign((context, event) => {
        if (event.value === 0) return { profit: event.value, sellPrice: 0 }
        const sellPrice = (
          context.buyPrice +
          (context.buyPrice * event.value) / 100
        ).toFixed(2)
        return { sellPrice: Number(sellPrice), profit: event.value }
      }),
    },
  }
)

export default profitCalculatorMachine
