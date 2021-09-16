import React from 'react'
import styled from 'styled-components'

function AccordionContent() {
    return (
        <Container>
            <AccordionContainer>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</AccordionContainer>
        </Container>
    )
}

export default AccordionContent
const Container = styled.div`
`
const AccordionContainer = styled.div`
background-color:#333333;
width:800px;
padding:15px 10px;
color:white;
font-size:25px;

`
