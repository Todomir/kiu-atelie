export type ProfitCalculatorActionType =
  | { type: 'EDIT_BUY_PRICE'; value: number }
  | { type: 'EDIT_SELL_PRICE'; value: number }
  | { type: 'EDIT_PROFIT'; value: number }

export type ProfitCalculatorContext = {
  buyPrice: number
  sellPrice: number
  profit: number
}
