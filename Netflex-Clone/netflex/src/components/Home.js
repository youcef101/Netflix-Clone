import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import SectionV1 from './SectionV1'
import SectionV2 from './SectionV2'
import Footer from './Footer'
import FAQ from './FAQ'
function Home() {
    return (
        <Container>
            <Intro />
            <SectionV1
                title="Enjoy on your TV."
                subTitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                imageUrl="/images/home-tv.jpg"
            />
            <SectionV2
                title="Download your shows to watch offline."
                subTitle="Save your favorites easily and always have something to watch."
                imageUrl="/images/home-mobile.jpg"
            />
            <SectionV1
                title="Watch everywhere."
                subTitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                imageUrl="/images/home-imac.jpg"
            />
            <SectionV2
                title="Create profiles for kids."
                subTitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                imageUrl="/images/home-kids.png"
            />
            <FAQ />
            <Footer />
        </Container>
    )
}

export default Home
const Container = styled.div``
