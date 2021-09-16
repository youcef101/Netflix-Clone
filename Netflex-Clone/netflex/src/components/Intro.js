import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Intro() {
    return (
        <Container>
            <Content>
                <TitleTop>Unlimited movies, TV</TitleTop>
                <TitleBottom> shows, and more.</TitleBottom>
                <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
            </Content>
            <InputContainer>
                <TitleItem>Ready to watch? Enter your email to create or restart your membership.</TitleItem>
                <EmailContainer>
                    <EmailInput placeholder="Email address" type="email" />
                    <GetStartBtn>Get Started <ArrowForwardIosIcon fontSize="small" /></GetStartBtn>
                </EmailContainer>
            </InputContainer>

        </Container>
    )
}

export default Intro
const Container = styled.div`
height:100vh;
margin-bottom:8px;
position:relative;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
&:before{
    background-size:cover;
    background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.95)),url("/images/home-bg2.jpg");
    background-repeat:no-repeat;
    background-position:top;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:-1;
    content:"";
    opacity:0.95;
}
`
const Content = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-bottom:25px;
`
const TitleTop = styled.div`
max-width:500px;
color:white;
font-size:47px;
font-weight:700;
`
const TitleBottom = styled(TitleTop)``
const SubTitle = styled.div`
color:white;
font-size:25px;
font-weight:500;
`
const InputContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const TitleItem = styled.div`
color:white;
font-size:20px;
font-weight:500;
margin-bottom:20px;
`
const EmailContainer = styled.div`
display:flex;
align-items:center;
`
const EmailInput = styled.input`
width:500px;
padding:18px 5px;
:focus{
    outline:none;
}
`
const GetStartBtn = styled.div`
color:white;
font-size:30px;
//font-weight:500;
background-color:#e50914;
padding:6px 10px;
cursor:pointer;
:hover{
    background-color:#ab070f;
    border:2px solid #7a050b;
}
`
