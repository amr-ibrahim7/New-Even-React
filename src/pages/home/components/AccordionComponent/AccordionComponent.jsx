import Accordion from "./Accordion/Accordion";
import { Description, FirstWord, SecondWord, Wrapper } from "./styled";


export default function AccordionComponent() {
  return (
    <div className="container">
        <Wrapper>
            <FirstWord>
                Do You Have
            <SecondWord> Questions?</SecondWord>
            </FirstWord>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, placeat, explicabo
            </Description>
            <Accordion />
        </Wrapper>
    </div>
  )
}
