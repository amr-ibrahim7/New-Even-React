import styled from "@emotion/styled";
import venue from 'images/Venue/venue-bg.jpg'
import theme from "../../../../design-system/config";


export const VenueHereWrapper = styled("section")`
    label:VenueHereWrapper;
    height: 400px;
    padding: 4rem 0 2rem 0;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${venue}) fixed;
`
export const Title = styled("h2")`
    label:Title;
    font-weight: bold;
    font-size: 2rem;
   color: ${theme.primary} ;
`
export const P = styled("p")`
    label:P;
    width: 400px;
    display: block;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
   color: ${theme.gray} ;
`
export const Span = styled("span")`
    label:Span;
    display: block;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0;
   color: ${theme.black} ;
`