import { Button, Heading, Icon, Input, Link } from '@kiuatelie/ui'
import { useMachine } from '@xstate/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { useForm } from 'react-hook-form'

import profitCalculatorMachine from '@/machines/profit-calculator.machine'
import * as S from '@/styles/dashboard/create-products.styles'
import { Form } from '@/styles/shared'

type CreateProductsFormData = {
  productCode: string
  description: string
  stockAmount: number
  buyPrice: number | string
  sellPrice: number | string
  profit: number | string
}

const CreateProducts: NextPage = () => {
  const [state, send] = useMachine(profitCalculatorMachine)

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductsFormData>()

  const onSubmit = (data: CreateProductsFormData) => {
    console.table(data)
  }

  // Update the price related form values when the state changes, since its values are calculated based on the emmited events
  if (state.changed) {
    setValue('buyPrice', state.context.buyPrice || '')
    setValue('sellPrice', state.context.sellPrice || '')
    setValue('profit', state.context.profit || '')
  }

  return (
    <S.Container>
      <NextLink href="https://example.com" passHref>
        <Link css={{ color: '$spaceDark1000' }} href="##">
          <Icon size={24} name="chevron-left" />
          Voltar à página anterior
        </Link>
      </NextLink>
      <Heading size="3xl" css={{ marginBlockEnd: '$20' }}>
        Adicionar novo produto
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('productCode', {
            required: 'O campo código não pode estar vazio.',
          })}
          label="Código"
          placeholder="01234"
          helperText="Código identificador único para cada produto"
          error={errors?.productCode?.message}
        />
        <Input
          {...register('description', {
            required: 'O campo descrição não pode estar vazio.',
          })}
          label="Descrição do produto"
          placeholder="Caderno 12 matérias"
          error={errors?.description?.message}
        />
        <Input
          {...register('stockAmount', {
            required: 'O campo quantidade em estoque não pode estar vazio.',
          })}
          label="Quantidade em estoque"
          placeholder="100"
          type="number"
          min={1}
          error={errors?.stockAmount?.message}
        />
        <Input
          {...register('buyPrice', {
            required: 'O campo valor de compra não pode estar vazio.',
          })}
          type="number"
          min={0}
          step={0.01}
          value={state.context.buyPrice || ''}
          onChange={e => {
            send({ type: 'EDIT_BUY_PRICE', value: Number(e.target.value) })
          }}
          label="Valor de compra"
          placeholder="Valor de compra"
          error={errors?.buyPrice?.message}
        />
        <Input
          {...register('sellPrice', {
            required: 'O campo valor de venda não pode estar vazio.',
          })}
          type="number"
          min={0}
          step={0.01}
          value={state.context.sellPrice || ''}
          onChange={e => {
            send({ type: 'EDIT_SELL_PRICE', value: Number(e.target.value) })
          }}
          label="Valor de venda"
          placeholder="Valor de venda"
          error={errors?.sellPrice?.message}
        />
        <Input
          {...register('profit', {
            required: 'O campo lucro não pode estar vazio.',
          })}
          type="number"
          min={0}
          step={0.01}
          value={state.context.profit || ''}
          onChange={e => {
            send({ type: 'EDIT_PROFIT', value: Number(e.target.value) })
          }}
          label="Porcentagem de lucro"
          placeholder="100%"
          helperText="Qual porcentagem de lucro deseja ter nesse produto?"
          error={errors?.profit?.message}
        />
        <Button rightIcon={<Icon name="chevron-right" />} type="submit">
          Cadastrar produtos
        </Button>
      </Form>
    </S.Container>
  )
}

export default CreateProducts
