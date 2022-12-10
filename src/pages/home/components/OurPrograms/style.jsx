import styled from "@emotion/styled";
import {theme} from "../../../../design-system/config";

export const OurProgramsWrapper = styled("section")`
label: OurProgramsWrapper;
padding: 5rem 0 2rem 0;
width: 940px;
`

export const Our = styled("span")`
    label: Our;
    padding-right: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.secondary};
`
export const Programs = styled("span")`
    label: Programs;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.primary};
`
export const Description = styled("p")`
    label: Description;
    color: ${theme.gray};
`
export const TabsWrapper = styled("div")`
    label: TabsWrapper;
    
`
export const Wrapper = styled("div")`
    label: Wrapper;
   display: flex;
   gap: 2rem;
`
export const Span = styled("span")`
    label: Span;
    padding: 2rem 0;
   font-weight: bold;
   cursor: pointer;
`
export const Line = styled("div")`
    label: Line;
    width: 100%;
    height: 1px;
   margin: 0 0 2rem 0;
   background-color: ${theme.black};
`