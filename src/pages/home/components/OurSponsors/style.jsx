import styled from "@emotion/styled";
import {theme} from "../../../../design-system/config";



export const OurSponsorsWrapper = styled("section")`
    label:OurSponsorsWrapper;
    padding: 4rem 0 2rem 0;
`
export const Wrapper = styled("div")`
    label:Wrapper;
    text-align: center;   
    padding: 4rem 0;   
`
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
export const Description = styled("p")`
    label:Description;
    color: ${theme.gray};
`      

export const SectionWrapper = styled("div")`
label: SectionWrapper;
display: flex;
align-items: center;
gap: 1rem;
`

