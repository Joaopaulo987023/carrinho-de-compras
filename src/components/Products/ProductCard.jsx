import React, { useContext } from 'react'
import {CartaoProduto, Price, Titulo} from './styles'
import { FaCartPlus } from "react-icons/fa";
import formatCurrency from '../../utils/fortmatCurrency';
import { CarrinhoContext } from '../../context/CarrinhoContext';

export default function ProductCard({data}) {
  const{cartItens, setCartItens}=useContext(CarrinhoContext)

  const {title,thumbnail,price} = data;

  const handleAddCart = ()=>{
    setCartItens([...cartItens, data])
  }

  return (
    <CartaoProduto>
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" />
      <div>
        <Price>{formatCurrency(price)}</Price>
        <Titulo>{title}</Titulo>
      </div>
      <button type='submit' onClick={handleAddCart}><FaCartPlus/></button>
    </CartaoProduto>
  )
}
