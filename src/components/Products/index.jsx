import React, { useContext, useEffect, useState } from 'react'
import fetchProduts from '../../Api/fetchProducts';
import ProductCard from './ProductCard';
import { Produtos } from './styles';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import Loading from '../Loading';


export default function Products() {

  const{products,setProducts,loading,setLoading}=useContext(CarrinhoContext);
  
  useEffect(()=>{
    fetchProduts('iphone').then((response) => {
      setProducts(response)
      console.log(response)
      setLoading(false)
    
    })
  },[])
  return (
    (loading && <Loading/>) || (
    <Produtos>
      {products.map((prod)=><ProductCard key={prod.id} data={prod}/>)
      }
    </Produtos>)
    
  )
}
