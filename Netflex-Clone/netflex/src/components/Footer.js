import React from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LanguageIcon from '@material-ui/icons/Language';
function Footer() {
    return (
        <Container>
            <LeftContainer>
                <Question>
                    <a href="#">Questions? Contact us.</a>
                </Question>
                <ActionItem>
                    <a href="#">FAQ</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Investor Relations</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Privacy</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Speed Test</a>
                </ActionItem>
                <LangageBtnContainer>
                    <NetIc><LanguageIcon fontSize="small" /></NetIc>
                    <TextItem>English</TextItem>
                    <ListIc><ArrowDropDownIcon fontSize="small" /></ListIc>
                </LangageBtnContainer>
            </LeftContainer>
            <MiddleLeftContainer>
                <ActionItem>
                    <a href="#">Help Center</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Jobs</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Cookie Preferences</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Legal Notices</a>
                </ActionItem>
            </MiddleLeftContainer>
            <MiddleRightContainer>
                <ActionItem>
                    <a href="#">Account</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Ways to Watch</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Corporate Information</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Only on Netflix</a>
                </ActionItem>
            </MiddleRightContainer>
            <RightContainer>
                <ActionItem>
                    <a href="#">Media Center</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Terms of Use</a>
                </ActionItem>
                <ActionItem>
                    <a href="#">Contact Us</a>
                </ActionItem>

            </RightContainer>
        </Container>
    )
}

export default Footer
const Container = styled.div`
background-color:#000;
display:grid;
height:70vh;
place-items:center;
display:flex;
align-items:center;
justify-content:space-evenly;
`
const LeftContainer = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
`
const MiddleLeftContainer = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
`
const MiddleRightContainer = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
`
const RightContainer = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
`
const ActionItem = styled.div`
font-size:13px;
margin-bottom:20px;
a{
    color:#4d4d4d;
    text-decoration:none;
    :hover{
        text-decoration:underline;
    }
}
`
const Question = styled.div`
font-size:17px;
margin-bottom:20px;
a{
    color:#4d4d4d;
    text-decoration:none;
    :hover{
        text-decoration:underline;
    }
}
`
const LangageBtnContainer = styled.div`
margin-top:20px;
border:1px solid #4d4d4d;
padding:15px 15px;
color:white;
display:flex;
align-items:center;
cursor:pointer;
`
const NetIc = styled.div`
display:flex;
align-items:center;
`
const TextItem = styled.div``
const ListIc = styled.div`
display:flex;
align-items:center;
`