import styled from "@emotion/styled";




import header from "../../../shared/assets/Header/intro-bg.jpg"
import theme from "../../config";

export const HeaderWrapper = styled("section")`
    label:HeaderWrapper;
    height: 100vh;
    padding: 20% 0 ;
    text-align: center;
    background-size:cover;
    background: url(${header}) fixed;
    background-repeat: no-repeat;
`
export const H3 = styled("h3")`
    label:H3;
    font-size: 1.5rem ;
   color: ${theme.white};
`
export const Title = styled("h1")`
    label:Title;
    font-size: 3rem ;
   color: ${theme.white};
`
export const LearnMore = styled("button")`
    label:LearnMore;
    cursor: pointer;
    font-size: 1rem ;
    margin-right: 2rem;
    padding: 1rem 3rem;
    background: transparent;
    color: ${theme.white};
    border: 1px solid ${theme.white};
    border-radius: 5px;
    transition: all 0.3s;
    :hover {
    color: ${theme.secondary};
    background: ${theme.white};
    border: 1px solid ${theme.white};
   
    }
`
export const RegisterNow = styled("button")`
    label:RegisterNow;
    cursor: pointer;
    font-size: 1rem ;
    padding: 1rem 3rem;
    color: ${theme.white};
    background-color: ${theme.primary};
   border: 1px solid ${theme.primary};
   border-radius: 5px;
   :hover {
    background: transparent;
    color: ${theme.white};
    border: 1px solid ${theme.white};
   }
`