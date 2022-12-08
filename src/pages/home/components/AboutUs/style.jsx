import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const AboutUsWrapper = styled("section")`
    label: AboutUsWrapper;
    gap: 2rem;
    align-items: flex-start;
    display: flex;
    padding: 5rem 0;
`
export const Span = styled("span")`
    label: Span;
   font-size: 1.5rem;
   line-height: 1.9rem;
   color: ${theme.secondary};
`
export const P = styled("p")`
    label: P;
    padding-top: 1rem;
    line-height: 1.7rem;
    font-size: 1rem;
    color: ${theme.gray};
`
export const Div = styled("div")`
    label: Div;
    width: 50%;
`
export const DivTwo = styled("div")`
    label: DivTwo;
    width: 50%;
`