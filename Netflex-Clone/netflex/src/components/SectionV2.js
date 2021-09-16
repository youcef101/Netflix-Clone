import React from 'react'
import styled from 'styled-components'

function SectionV2({ title, subTitle, imageUrl }) {
    return (
        <Container>
            <SectionContainer>
                <Wrap>
                    <img src={imageUrl} />
                </Wrap>
                <TitleContainer>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </TitleContainer>

            </SectionContainer>
        </Container>
    )
}

export default SectionV2
const Container = styled.div`
background-color:#000;
margin-bottom:8px;
height:85vh;
display:grid;
place-items:center;

`
const SectionContainer = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
`
const TitleContainer = styled.div``
const Title = styled.div`
max-width:580px;
color:white;
font-size:50px;
font-weight:700;
`
const SubTitle = styled.div`
max-width:600px;
color:white;
font-size:30px;
font-weight:500;
`
const Wrap = styled.div`

`