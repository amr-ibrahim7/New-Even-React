import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import contact from '../../../../shared/assets/ContactUs/contactUs-bg.jpg'
export const ContactWrapper = styled("section")`
label : ContactWrapper;
height: 600px;
padding: 4rem 0;
background-size: cover;
background-repeat: no-repeat;
background: url(${contact})
`;
export const Wrapper = styled("div")`
label : Wrapper;
display: flex;
gap:  1rem ;
align-items: center;
justify-content: flex-start;
`;

export const FirstWord = styled("span")`
    label:FirstWord;
   font-weight: bold;
    font-size: 2.3rem;
    color: ${theme.black};
`
export const SecondWord = styled("span")`
    label:SecondWord;
    font-size: 2.3rem;
    font-weight: bold;
    color: ${theme.primary};
`
export const P = styled("p")`
    label:P;
    display: block;
    line-height: 1.3;
    width:80%;
    color: ${theme.gray};
`
export const DownloadNow = styled("button")`
    label:DownloadNow;
    cursor: pointer;
    font-size: 1rem ;
    margin-right: 2rem;
    padding: 1rem 3rem;
    margin-top: 3rem;
    background:  ${theme.primary};
    color: ${theme.white};
    border: 1px solid ${theme.white};
    border-radius: 25px;
    transition: all 0.3s;
    :hover {
    color: ${theme.white};
    background: ${theme.black};
    border: none;
    }
`

export const FormWrapper = styled("div")`
    label:FormWrapper;
    padding: 6rem;
    border-radius: 13%;
    background-color: ${theme.white};
`
export const InputsWrapper = styled("div")`
    label:InputsWrapper;
    gap: 1rem;
    display: flex;
    margin-top: 3rem;
    gap: 1rem;
    flex-direction: column;
`
export const Input = styled("input")`
    label:Input;
    border: none;
    font-size: 1.2rem;
    outline: none;
    padding: 0.5rem 0;
    background-color: ${theme.white};
`
export const TextArea = styled("textarea")`
    label:TextArea;
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    background-color: ${theme.white};
`

export const SendNow = styled("button")`
    label:SendNow;
    cursor: pointer;
    font-size: 1rem ;
    margin-right: 2rem;
    padding: 1rem 3rem;
    margin-top: 3rem;
    background:  ${theme.primary};
    color: ${theme.white};
    border: 1px solid ${theme.white};
    border-radius: 25px;
    transition: all 0.3s;
    :hover {
    color: ${theme.white};
    background: ${theme.black};
    border: none;
    }
`