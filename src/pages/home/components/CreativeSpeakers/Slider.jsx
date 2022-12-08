
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import { Autoplay} from "swiper";
import speakerData from '../../../../design-system/components/CreativeSpeakers/SpeakersData';
import CreativeSpeakers from '../../../../design-system/components/CreativeSpeakers/CreativeSpeakers';


export default function Slider() {
  return (
    <Swiper
    autoplay={{
        delay:2500,
        disableOnInteraction:false,
    }}
    loop={true}
    modules={[Autoplay]}
    spaceBetween={50}
    slidesPerView={4}
  >
    
    {speakerData.map((item) => {
      return(
        
        <SwiperSlide key={item.id}>
          <CreativeSpeakers img={item.img} name={item.name} job={item.job} alt={item.alt} />
        </SwiperSlide>
      );
    })}
  </Swiper>
  )
}
