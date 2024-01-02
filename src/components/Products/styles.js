import styled from "styled-components";
import { Container } from "../Header/stylesHeader";


export const Produtos = styled(Container)`
    padding: 120px 20px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    gap: 20px;
    

`


export const CartaoProduto = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: 0 auto;
    & img{
        width: 100%;
    }
    & div{
        padding: 20px;
        border-top: 1px solid #ddd;

    }
    & button{
        position: absolute;
        top: 0;
        right: 0;
        width:45px;
        height: 45px;
        margin: 12px 15px;
        color: #0c5dd6;
        display: none;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 50px;
        background-color: rgba(255,255,255,0.8);
        font-size: 1.5rem;
        cursor: pointer;
             &:hover{
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
    }
    &:hover button{
        display: flex;
    }

`
export const Price = styled.h2`
        font-size: 30px;
        font-weight: 400;
        display: block;
        margin-bottom: 10px;
    `
export const Titulo = styled.h2`
    font-size: 15px;
    color: rgba(0,0,0,0.5);
    line-height: 1.5;
    font-weight:500;
    display: inline;
    margin: 0;
    
`
