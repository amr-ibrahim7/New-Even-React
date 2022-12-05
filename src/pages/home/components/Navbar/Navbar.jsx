import { Event, LinksWrapper, NavbarWrapper, NavContainer, NavTitle } from "./style";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <NavbarWrapper>
        <div className="container">
        <NavContainer>
            <div>
                <NavTitle>New <Event>Event</Event></NavTitle>
            </div>
            <LinksWrapper >
            <NavItems />
            </LinksWrapper>
        </NavContainer>

         </div>
    </NavbarWrapper>
  )
}
