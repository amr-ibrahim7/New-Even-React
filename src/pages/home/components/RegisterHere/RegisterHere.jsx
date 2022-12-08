import React from 'react'
import { ColoredTitle, FormWrapper, RegisterButton, RegisterContainer, RegisterHereWrapper, RegisterInput, Text, TextTwo, Title } from './style'


export default function RegisterHere() {
  return (
    <RegisterHereWrapper>
        <div className='container'> 
        <RegisterContainer>
            <div style={{width: "60%"}}>
            <Title>Register</Title>
            <ColoredTitle>Here</ColoredTitle>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum aperiam voluptatum animi voluptate </Text>
            <TextTwo>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatum nemo recusandae animi Blanditiis consequuntur suscipit voluptas omnis. Quod ipsa facilis eligendi quas vitae distinctio hic quia itaque minus veniam.
            </TextTwo>
            </div>
            <FormWrapper style={{width: "35%"}}>
                <RegisterInput type="text" placeholder='First Name' />
                <RegisterInput type="text" placeholder='last Name' />
                <RegisterInput type="number" placeholder='Phone Number'/>
                <RegisterInput type="email" placeholder='Email Address'/>
            </FormWrapper>
        </RegisterContainer>
        <div style={{textAlign: "right"}}>
            <RegisterButton>Register</RegisterButton>
        </div>
        
        </div>
    </RegisterHereWrapper>
  )
}
