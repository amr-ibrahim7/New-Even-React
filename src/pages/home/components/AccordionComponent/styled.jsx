import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const Wrapper = styled("div")`
    label:Wrapper;
    text-align: center;   
    padding: 4rem 0 3rem 0;
    margin-bottom: 2rem;
`
export const FirstWord = styled("span")`
    label:FirstWord;
   
    font-size: 1.5rem;
    color: ${theme.black};
`
export const SecondWord = styled("span")`
    label:SecondWord;
    /* text-align: center; */
    font-size: 1.5rem;
    color: ${theme.primary};
`
export const Description = styled("p")`
    label:Description;
    text-align: center;
    color: ${theme.gray};
`