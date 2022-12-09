import styled from "@emotion/styled";
import register from 'images/Register/register-bg.jpg'
import theme from "../../../../design-system/config";


export const RegisterHereWrapper = styled("section")`
    label:RegisterHereWrapper;
    height: 400px;
    padding: 4rem 0 2rem 0;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${register}) fixed;
`
export const RegisterContainer = styled("div")`
    label:RegisterContainer;
    display: flex;
    align-items: flex-start; 
    justify-content: space-between;
`

export const Title = styled("span")`
    label:Title;
    font-size: 2rem;
    padding-right: 0.4rem;
    color: ${theme.white};
`
export const ColoredTitle = styled("span")`
    label:ColoredTitle;
    font-size: 2rem;
    color: ${theme.primary};
`
export const Text = styled("p")`
    label:Text;
    font-size: 1.5rem;
    color: ${theme.white};
`
export const TextTwo = styled("p")`
    label:TextTwo;
    
    color: ${theme.gray};
`
export const FormWrapper = styled("div")`
    label:FormWrapper;
   display: flex ;
   flex-direction: column;
   gap:1rem;
`
export const RegisterInput = styled("input")`
    label:RegisterInput;
    padding: 0.6rem;
    border-radius: 5px;
    border: 1px solid ${theme.primary};
    outline: none;
    background-color: transparent;
    color: ${theme.whiteSmoke};
    ::placeholder {
        font-size: 1rem;
    }
`

export const RegisterButton = styled("button")`
    label:RegisterButton;
    cursor: pointer;
    font-size: 1rem ;
    margin-right: 2rem;
    padding: 1rem 3rem;
    background:  ${theme.white};
    color: ${theme.secondary};
    border: 1px solid ${theme.white};
    border-radius: 25px;
    transition: all 0.3s;
    :hover {
    color: ${theme.white};
    background: ${theme.primary};
    border: none;
    }
`