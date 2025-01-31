import React from 'react'
import styled from 'styled-components'
import woman from '../assets/hero-woman.jpg'
import fotter from '../assets/heroFotter.jpg'
import logo from '../Icons/pay4me.svg'

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
`

const Header = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
`

const DownloadButton = styled.button`
  background-color: #bfff7f;
  color: black;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
`

const DemoButton = styled(DownloadButton)``

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`

const SecureLabel = styled.div`
  color: #bfff7f;
  font-size: 0.875rem;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Navv = () => {
  return (
    <Wrapper>
      <Header>
        <img src={logo} />
        <Navigation>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
        </Navigation>
      </Header>

      <HeroSection>
        <HeroText>
          Reliable Payment Solutions for International Education
        </HeroText>
        <ButtonWrapper>
          <DownloadButton>Download app</DownloadButton>
          <DemoButton>Watch Demo</DemoButton>
        </ButtonWrapper>
        <SecureLabel>SECURE. GLOBAL. FAST.</SecureLabel>
        <Image src={woman} alt="Student" />
        <img src={fotter} />
      </HeroSection>
    </Wrapper>
  )
}

export default Navv
