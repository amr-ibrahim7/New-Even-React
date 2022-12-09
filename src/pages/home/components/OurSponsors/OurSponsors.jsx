import React from 'react'
import OurSponsors from '../../../../design-system/components/OurSponsors/OurSponsors'
import ourSponsorsData from './OurSponsorsData'
import { Description, FirstWord, OurSponsorsWrapper, SecondWord, SectionWrapper, Wrapper } from './style'

export default function OurSponsorsComponent() {
  return (
    <OurSponsorsWrapper>
        <div className='container'>
        <Wrapper>
            <FirstWord>
                Our
            <SecondWord> Sponsors</SecondWord>
            </FirstWord>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, placeat, explicabo
            </Description>
        </Wrapper>
        <SectionWrapper>
           {ourSponsorsData.map((item) => {
            return (
               < OurSponsors src={item.src} alt={item.alt} />
            )
           })}
        </SectionWrapper>
        </div>

    </OurSponsorsWrapper>
  )
}
