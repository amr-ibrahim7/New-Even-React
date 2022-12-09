import { ContactWrapper, DownloadNow, FirstWord, FormWrapper, Input, InputsWrapper, P, SecondWord, SendNow, TextArea, Wrapper } from './style'

export default function ContactUs() {
  return (
    <ContactWrapper>
        <div className='container'>
           <Wrapper>
           <div style={{width: "50%"}}> 
           <FirstWord>New</FirstWord>
           <SecondWord>Event</SecondWord>
           <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
             officiis. Repudiandae, qui maxime nostrum, impedit explicabo, dicta
              odit soluta nesciunt
           </P>
           <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
             officiis. Repudiandae, qui maxime nostrum, impedit explicabo, dicta
              odit soluta nesciunt impedit explicabo, qui
           </P>
           <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
             officiis. Repudiandae, qui maxime nostrum, impedit explicabo, dicta
              odit soluta nesciunt 
           </P>
           <DownloadNow>Download Now</DownloadNow>
           </div>
            <FormWrapper>
                <div>
                <FirstWord>Keep In</FirstWord>
                <SecondWord>Touch</SecondWord>
                <form>
                    <InputsWrapper>
                    <Input type= "name" placeholder= "Name"/>
                    <Input type= "email" placeholder= "Email"/>
                    <TextArea  placeholder= "Message"/>
                    </InputsWrapper>
                    <div>
                        <SendNow>Send Now</SendNow>
                    </div>
                </form>
                </div>
            </FormWrapper>
           </Wrapper>
        </div>
    </ContactWrapper>
  )
}
