import OverviewComponent from "../../../../design-system/components/Overview/Overview";
import overViewData from "../../../../design-system/components/Overview/OverviewData";
import { OverviewContainer, OverviewWrapper } from "./style";

export default function Overview() {
  return (
    <OverviewWrapper>
        <div className="container">
            <OverviewContainer>
            {overViewData.map(item => {
                return (
                    <OverviewComponent title={item.title} description={item.description} icon={item.icon} key={item.id}  />
                    )
                })}
            </OverviewContainer>
        </div>
    </OverviewWrapper>
  )
}
