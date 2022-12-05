import React from 'react'
import { IconWrapper, Image, ImageWrapper, OurProgramsWrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function OurPrograms({img,alt,time,roomNumber,title,name,description}) {
  return (
    <OurProgramsWrapper>
        <ImageWrapper>
            <Image src={img} alt={alt}/>
        </ImageWrapper>
        <div>
            <IconWrapper>
                <div>
           <FontAwesomeIcon size='xs' icon={faClock}/> {time}
                </div>
                <div>
           <FontAwesomeIcon size='xs' icon={faMapMarkerAlt}/> {roomNumber}
                </div>
            </IconWrapper>
            <h2>{title}</h2>
            <span>{name}</span>
            <p>{description}</p>
        </div>
    </OurProgramsWrapper>
  )
}
 