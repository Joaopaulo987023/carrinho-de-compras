import React, { useContext } from 'react'
import { BsFillCartDashFill } from "react-icons/bs";
import { Botao, CartPrice, CartTitle, ContainerCartItem } from './styles';
import formatCurrency from '../../utils/fortmatCurrency';
import { CarrinhoContext } from '../../context/CarrinhoContext';

export default function CartItem({data}) {
    const{thumbnail, price, title,id} = data;
    const{cartItens,setCartItens}=useContext(CarrinhoContext)
     const handleRemove=()=>{
        const updateItens = cartItens.filter((item)=>item.id !== id);
        setCartItens(updateItens)
        
     }
  return (
    <ContainerCartItem>
        <img src={thumbnail} alt="imagem produto" />
        <div>
            <CartTitle>{title}</CartTitle>
            <CartPrice>{formatCurrency(price)}</CartPrice>
            <Botao type='button' onClick={handleRemove}><BsFillCartDashFill/></Botao>
        </div>
        
    </ContainerCartItem>
  )
}
