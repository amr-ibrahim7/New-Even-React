import styled from "@emotion/styled";
import {theme} from "../../../../design-system/config";

export const FooterWrapper = styled("footer")`
    label: FooterWrapper;
    padding: 3rem;
    text-align: center;
`
export const Span = styled("span")`
    label: Span;
    color: ${theme.gray}
`
export const MadBy = styled("span")`
    label: MadBy;
    font-weight: bold;
    color: ${theme.primary}
`
export const Ui = styled("ul")`
    label: Ui;
    display: flex;
    gap: 4rem;
    padding-top: 3rem;
    align-items: center;
    justify-content: center;
    list-style: none;
`
export const Li = styled("li")`
    label: Li;
    display: flex;
    width: 20px;
    height: 20px;
    padding: 1rem;
    border-radius:50%;
    align-items: center;
    justify-content: center;
    color: ${theme.gray};
    transition: 0.4s all;
    cursor: pointer;
    :hover {
        color: ${theme.white};
        background-color: ${theme.primary};
    }
`