import { AboutUsWrapper, Div, DivTwo, P, Span } from "./style";
import about from "../../../../shared/assets/AboutUs/AbouUs-img.jpg"

export default function AboutUs() {
  return (
    <div className="container">
        <AboutUsWrapper>
            <Div>
                <Span>
                    New Event is a fully responsive one-page template for events,
                    conferences or workshops
                </Span>
                <P>
                    This is a Bootstrap v3.33.6 layout that is responsive and mobile friendly. You may download and modify this template for your website. please tell your friends about Templatemo
                </P>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab fugit sequi sapiente inventore quo quaerat vero alias! Cumque illo dolor soluta expedita veritatis? Iure, recusandae.
                </P>

                
            </Div>
            <DivTwo>
                <img width="100%" src={about} alt="" />
            </DivTwo>
        </AboutUsWrapper>
    </div>
  )
}
