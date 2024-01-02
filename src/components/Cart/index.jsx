import React, { useContext } from 'react'
import { CartProd, ContainerCart, ResumoItem } from './styles'
import CartItem from '../CartItem'
import { CarrinhoContext } from '../../context/CarrinhoContext'
import formatCurrency from '../../utils/fortmatCurrency';

export default function Cart() {
   const {cartItens, isActivate}=useContext(CarrinhoContext);
   const totalPrice = cartItens.reduce((acc, item)=>item.price + acc,0);
   
  return (
    <ContainerCart $activate={isActivate.toString()}>
        <CartProd>
            {cartItens.map((Item)=><CartItem  key={Item.id} data={Item}/>)}
        </CartProd>
        
        <ResumoItem>{formatCurrency(totalPrice)}</ResumoItem>
    </ContainerCart>
  )
}
