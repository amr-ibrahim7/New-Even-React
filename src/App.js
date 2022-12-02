
import Overview from './design-system/components/Overview';
import {faUserGroup, faAnchor, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import overViewData from './design-system/components/Overview/OverviewData';
import CreativeSpeakers from './design-system/components/CreativeSpeakers/CreativeSpeakers';
import speakerData from './design-system/components/CreativeSpeakers/SpeakersData';


function App() {
  return ( 
<div className='App'>
  <div style={{ display: "flex"}}>
   {speakerData.map(item  => {
    return (
      <CreativeSpeakers img={item.img} name={item.name} job ={item.job} alt={item.alt} key={item.id} />
    )
   })}
    </div>
 </div>

  ) ;
}

export default App;
