import React from 'react'
import { Description, IconWrapper, Image, ImageWrapper, Name, OurProgramsWrapper, Title } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function OurProgramsComponent({img,alt,time,roomNumber,title,name,description}) {
  return (
    <OurProgramsWrapper>
        <ImageWrapper>
            <Image src={img} alt={alt}/>
        </ImageWrapper>
        <div>
            <IconWrapper>
                <div>
           <FontAwesomeIcon  size='xs' icon={faClock}/> 
           <span>{time}</span>
                </div>
                <div>
           <FontAwesomeIcon  size='xs' icon={faMapMarkerAlt}/> {roomNumber}
                </div>
            </IconWrapper>
            <Title>{title}</Title>
            <Name>{name}</Name>
            <Description>{description}</Description>
        </div>
    </OurProgramsWrapper>
  )
}
 