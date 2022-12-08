import { Div, DivTwo, P, Span, SubTitle, WatchVideoWrapper } from './style'

export default function WatchVideo() {
  return (

    <div className="container">
    <WatchVideoWrapper>
        <Div>
            <Span>
                WATCH VIDEO
            </Span>
            <SubTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure perferendis, blanditiis obcaecati placeat rem. SitAccusantium ab fugit 
            </SubTitle>
            <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab fugit sequi sapiente inventore quo quaerat vero alias! Cumque illo dolor soluta expedita veritatis? Iure, recusandae.elit. A iure perferendi
            </P>
        </Div>
        <DivTwo>
            <iframe
            width="100%"
            height="350px"
             src="https://www.youtube.com/embed/watch?v=ZQObK6XkGHE&list=PLmQ0KfqeaHAuud_Aav-94nfToArf6Uh4K"> </iframe>
        </DivTwo>
    </WatchVideoWrapper>
</div>

  )
}
