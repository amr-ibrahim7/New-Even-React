import React from 'react'
import { P, Span, Title, VenueHereWrapper } from './style'

export default function Venue() {
  return (
    <VenueHereWrapper>
        <div className='container'>
        <Title>Venue</Title>
        <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, enim sed doloremque quidem deleniti ipsa perspiciatis corporis repudiandae 
        </P>
            <Span>New Event</Span>
            <Span>120 Market Street, Suite 110</Span>
            <Span>San Francisco, CA 10110</Span>
            <Span> Tel: 010:020-0120</Span>
        </div>
    </VenueHereWrapper>
  )
}
