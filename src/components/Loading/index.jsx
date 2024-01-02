
import { LuLoader2 } from "react-icons/lu";
import styled from 'styled-components'
export default function Loading() {
  return (
    <StyleLoading/>
  )
}

const StyleLoading=styled(LuLoader2)`
    font-size: 2rem;
    margin: 200px auto 0;
    width: 100%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
`
