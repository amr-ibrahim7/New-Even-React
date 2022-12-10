import { faBehance, faDribbble, faFacebook, faGoogle, faInstagram, faSnapchat, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {madeBy} from "../../../../design-system/config";
import { FooterWrapper, Li, MadBy, Span, Ui } from "./style";


export default function Footer() {
  return (
    <FooterWrapper>
        <div className="container">
            <div>
                <Span>Copyright @ 2018 Your Company | Design:</Span>
                <MadBy>{madeBy}</MadBy>
            </div>
            
                <Ui>
                    <Li>
                    <FontAwesomeIcon icon={faFacebook} />
                    </Li>
                    <Li>
                    <FontAwesomeIcon icon={faTwitter} />
                    </Li>
                    <Li>
                    <FontAwesomeIcon icon={faDribbble} />
                    </Li>
                    <Li>
                    <FontAwesomeIcon icon={faBehance} />
                    </Li>
                    <Li>
                    <FontAwesomeIcon icon={faGoogle} />
                    </Li>
                </Ui>
        </div>
    </FooterWrapper>
  )
}
