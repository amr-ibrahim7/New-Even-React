import styled from "@emotion/styled";
import {theme} from "../../../../design-system/config";

export const Wrapper = styled("div")`
    label:Wrapper;
    text-align: center;   
    padding: 4rem 0;   
`
export const FirstWord = styled("span")`
    label:FirstWord;
   padding-right: 0.5rem;
    font-size: 2rem;
    color: ${theme.black};
`
export const SecondWord = styled("span")`
    label:SecondWord;
    font-size: 2rem;
    padding: 0 0.5rem;
    color: ${theme.primary};
`
export const Description = styled("p")`
    label:Description;
    color: ${theme.gray};
`