// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Appear, Image, Text } from 'spectacle'
import styled from 'styled-components'

import asSlide from './as-slide.jsx'
import FullScreen from './full-screen.jsx'

const imageStyle = {
  zoom: 8, //increase if you have very small images
  display: 'block',
  margin: 'auto',
  height: 'auto',
  width: 'auto',
  maxWidth: '100%',
  maxHeight: '90%',
  marginTop: '5%'
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 33%;
  justify-content: space-evenly;
`

const AboutMeSlide = ({ children }) => {
  const hannah = require('../../assets/images/hannah.jpg').replace('/', '')
  const zoe = require('../../assets/images/zoe.png').replace('/', '')
  const nicole = require('../../assets/images/nicole.png').replace('/', '')
  return (
    <FullScreen column>
      <Row style={{ flexShrink: 0 }}>
        <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
          C5 2019 Developer Survey
        </Heading>
      </Row>
      <Row>
        <Column>
          <Image src={hannah} style={imageStyle} />
          <Text>Hannah</Text>
        </Column>
        <Column>
          <Image src={zoe} style={imageStyle} />
          <Text>Zoe</Text>
        </Column>
        <Column>
          <Image src={nicole} style={imageStyle} />
          <Text>Nicole</Text>
        </Column>
      </Row>
      {children}
    </FullScreen>
  )
}

export default asSlide(AboutMeSlide)
