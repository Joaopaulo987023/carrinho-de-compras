import { useState } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

function CarrinhoProvider({children}){

    const [products, setProducts]=useState([]);
    const[cartItens,setCartItens]=useState([]);
    const[loading, setLoading]=useState(true);
    const[isActivate,setIsActivate]=useState(false);
    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItens,
        setCartItens,
        isActivate,
        setIsActivate
    
    }
    return(
        <CarrinhoContext.Provider value={value}>
            {children}
        </CarrinhoContext.Provider>
    )

}

export default CarrinhoProvider;