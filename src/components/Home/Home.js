import React from 'react'
import NavMenu from '../Navbar/NavMenu'
import Footer from '../Footer/Footer'
import Wrapper from '../Wrapper'
import IntroSection from './Intro/IntroSection'
import WhyUs from './WhyUs/WhyUs'
import MindBehind from './MindBehind/MindBehind'

const Home = () => {
  return (
    <div>
        <Wrapper>
        <NavMenu />
        <IntroSection />
        <WhyUs />
        <MindBehind />

        <Footer />
        </Wrapper>
    </div>
  )
}

export default Home