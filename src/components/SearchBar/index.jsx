import React, { useContext, useState } from 'react';
import { Formulario } from './styles';
import { BiSearch } from "react-icons/bi";
import fetchProduts from '../../Api/fetchProducts';
import { CarrinhoContext } from '../../context/CarrinhoContext';
export default function SearchBar() {

  const[searchValue, setSearchValue]=useState()
  const{setProducts, setLoading}=useContext(CarrinhoContext);
  
  const handleSearch = async (event)=>{
      event.preventDefault();
      setLoading(true);
      const products = await fetchProduts(searchValue);
      
      setProducts(products);
      setLoading(false)
      setSearchValue('')


  }
  return (

        <Formulario onSubmit={handleSearch}>
            <input type="search"
            value={searchValue} 
            placeholder='Buscar produtos ' 
            required 
            onChange={(e)=>{setSearchValue(e.target.value)}}/>
            <button type='submit'>
              <BiSearch/>
            </button>
         </Formulario>
    
  )
}
