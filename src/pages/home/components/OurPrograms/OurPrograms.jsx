import { Description, Our, OurProgramsWrapper, Programs, TabsWrapper } from "./style";
import Tabs from "./Tabs";

export default function OurProgramsPages() {
  return (
      <div className="container">
    <OurProgramsWrapper>
      <div>
        <Our>Our</Our>
        <Programs>Programs</Programs>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, delectus. Quisquam saepe. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
        </div >
        <TabsWrapper>

          <Tabs />

        </TabsWrapper>
    </OurProgramsWrapper>
      </div>
  )
}
