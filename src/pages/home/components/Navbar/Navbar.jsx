import { Event, LinksWrapper, NavbarWrapper, NavContainer, NavTitle } from "./style";
import NavLinks from "./NavLinks"
import links from "./Links"

export default function Navbar() {
  return (
    <NavbarWrapper>
        <div className="container">
        <NavContainer>
            <div>
                <NavTitle>New <Event>Event</Event></NavTitle>
            </div>
            <LinksWrapper >
              {links.map((link, index) => {
                return (
                  <NavLinks navLink={link.navLink} navText={link.navText} key={index} />
                )
              })}
            </LinksWrapper>
        </NavContainer>

         </div>
    </NavbarWrapper>
  )
}
