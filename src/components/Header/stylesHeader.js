import styled from "styled-components"
import { theme } from "../../styles/Theme"

export const StyledHeader = styled.header`

    background-color: ${({theme})=>theme.colors.secundaryColor};
    position:fixed;
    width: 100%;
    margin-bottom: 20px;
    z-index:1;  
`

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

`