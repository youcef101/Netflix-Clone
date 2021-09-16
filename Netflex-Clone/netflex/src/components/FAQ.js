import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import AccordionContent from './AccordionContent';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Accordions from './Accordions';
function FAQ() {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(true)
    }
    const toggleClose = () => {
        setOpen(false)
    }
    return (
        <Container>
            <TitleContainer>
                <Title>Frequently Asked Questions</Title>
            </TitleContainer>
            <Accordion>
                <Accordions />
                <Accordions />
                <Accordions />
                <Accordions />
                <Accordions />
                <Accordions />
                {/* <AccordionContainer >
                    <QuestionContainer>
                        <Question>What is Netflix?</Question>
                        {open === false ?
                            <OpenIc onClick={toggleOpen}><AddIcon fontSize="large" /></OpenIc>
                            :
                            <CloseIc onClick={toggleClose}><CloseIcon fontSize="large" /></CloseIc>
                        }
                    </QuestionContainer>
                    {open === true ? <>
                        <AccordionContent />
                    </> : null}

                </AccordionContainer>
                <AccordionContainer >
                    <QuestionContainer>
                        <Question>What is Netflix?</Question>
                        {open === false ?
                            <OpenIc onClick={toggleOpen}><AddIcon fontSize="large" /></OpenIc>
                            :
                            <CloseIc onClick={toggleClose}><CloseIcon fontSize="large" /></CloseIc>
                        }
                    </QuestionContainer>
                    {open === true ? <>
                        <AccordionContent />
                    </> : null}

                </AccordionContainer>
                <AccordionContainer>
                    <QuestionContainer>
                        <Question>What is Netflix?</Question>
                        {open === false ?
                            <OpenIc onClick={toggleOpen}><AddIcon fontSize="large" /></OpenIc>
                            :
                            <CloseIc onClick={toggleClose}><CloseIcon fontSize="large" /></CloseIc>
                        }
                    </QuestionContainer>
                    {open === true ? <>
                        <AccordionContent />
                    </> : null}

                </AccordionContainer>
                <AccordionContainer>
                    <QuestionContainer>
                        <Question>What is Netflix?</Question>
                        {open === false ?
                            <OpenIc onClick={toggleOpen}><AddIcon fontSize="large" /></OpenIc>
                            :
                            <CloseIc onClick={toggleClose}><CloseIcon fontSize="large" /></CloseIc>
                        }
                    </QuestionContainer>
                    {open === true ? <>
                        <AccordionContent />
                    </> : null}

                </AccordionContainer>
                <AccordionContainer>
                    <QuestionContainer>
                        <Question>What is Netflix?</Question>
                        {open === false ?
                            <OpenIc onClick={toggleOpen}><AddIcon fontSize="large" /></OpenIc>
                            :
                            <CloseIc onClick={toggleClose}><CloseIcon fontSize="large" /></CloseIc>
                        }
                    </QuestionContainer>
                    {open === true ? <>
                        <AccordionContent />
                    </> : null}

                </AccordionContainer>
                <AccordionContainer>
                    <QuestionContainer>
                        <Question>What is Netflix?</Question>
                        {open === false ?
                            <OpenIc onClick={toggleOpen}><AddIcon fontSize="large" /></OpenIc>
                            :
                            <CloseIc onClick={toggleClose}><CloseIcon fontSize="large" /></CloseIc>
                        }
                    </QuestionContainer>
                    {open === true ? <>
                        <AccordionContent />
                    </> : null}

                </AccordionContainer> */}
            </Accordion>
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

export default FAQ
const Container = styled.div`
background-color:#000;
margin-bottom:8px;
display:grid;
place-items:center;
`
const TitleContainer = styled.div`
margin-bottom:35px;
margin-top:20px;
`
const Title = styled.div`
//max-width:500px;
color:white;
font-size:50px;
font-weight:700;
`
const Accordion = styled.div`
margin-bottom:45px;
`
const AccordionContainer = styled.div`
margin-bottom:10px;
`
const QuestionContainer = styled.div`
padding:15px 10px;
margin-bottom:2px;
background-color:#333333;
width:800px;
display:flex;
align-items:center;
`
const Question = styled.div`
color:white;
font-size:25px;
display:flex;
flex:1;
`
const OpenIc = styled.div`
color:white;
cursor:pointer;
`
const CloseIc = styled(OpenIc)``
const InputContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-bottom:100px;
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
