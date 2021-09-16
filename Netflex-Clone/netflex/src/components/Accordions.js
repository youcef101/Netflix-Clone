import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import AccordionContent from './AccordionContent';

function Accordions() {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(true)
    }
    const toggleClose = () => {
        setOpen(false)
    }
    return (
        <Container>
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
        </Container>
    )
}

export default Accordions
const Container = styled.div``
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