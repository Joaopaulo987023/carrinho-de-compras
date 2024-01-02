import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Carrinho } from './styles';
import { CarrinhoContext } from '../../context/CarrinhoContext';


export default function CartButton() {
  const{isActivate,setIsActivate,cartItens}=useContext(CarrinhoContext);
  return (
    <Carrinho onClick={()=>setIsActivate(!isActivate)}>
        <IoCartOutline/>
        {cartItens.length > 0 && <span>{cartItens.length}</span>}
    </Carrinho>
  )
}
