import styled from "styled-components";

export const ContainerCart = styled.section`
    width: 100%;
    max-width: 330px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 100px 20px 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: ${(props)=>(props.$activate ==="false" ? "translate(110%,0)": "translate(0,0)")};
    transition: all 400ms ease;
    & :last-child{
        border-bottom: none;
    }
    
`


export const CartProd = styled.div`
    flex-grow: 1;
    overflow: auto;
`

export const ResumoItem = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 35px 0 15px;
    border-top: 1px solid #ddd;
`