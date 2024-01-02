import styled from "styled-components";


export const Carrinho = styled.button`
    font-size: 1.5rem;
    display: flex;
    padding: 5px;
    background: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #333;
    margin-left: 20px;
    & span{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 11px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        color: white;

    }

`