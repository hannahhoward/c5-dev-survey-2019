// Import React
import React from 'react'
import PropTypes from 'prop-types'

// Import Spectacle Core tags
import { Heading, Image, Text } from 'spectacle'

import asSlide from './as-slide.jsx'
import { headingColor, textColor } from './utilities.jsx'
import FullScreen from './full-screen.jsx'

const imageStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)'
}

const SentimeterSlide = ({
  title,
  size,
  fit,
  caps,
  inverted,
  text,
  children
}) => {
  const thisImageStyle = {
    ...imageStyle,
    zoom: 8, //increase if you have very small images
    display: 'block',
    margin: 'auto',
    height: 'auto',
    width: 'auto',
    maxWidth: '80%',
    top: title ? '10%' : '0%',
    maxHeight: title ? '90%' : '100%'
  }
  return (
    <FullScreen column>
      {!!title && (
        <div style={{ width: 1000 }}>
          <Heading
            size={size}
            fit={fit}
            caps={caps}
            textColor={headingColor(inverted)}
            style={{ marginBottom: '.5em' }}
          >
            {title}
          </Heading>
        </div>
      )}
      <div
        style={{
          flex: 1,
          position: 'relative',
          width: '100%',
          justifyContent: 'stretch'
        }}
      >
        <iframe
          style={thisImageStyle}
          src="https://sentimeter.carbonfive.com/reports/7d43371a-89ad-4c5e-b50a-55d09a8cac1e"
        />
      </div>
      {!!text && (
        <div style={{ width: 1000 }}>
          <Text textColor={textColor(inverted)} style={{ marginTop: '.5em' }}>
            {text}
          </Text>
        </div>
      )}
      {children}
    </FullScreen>
  )
}

SentimeterSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired,
  text: PropTypes.node,
  title: PropTypes.string
}

SentimeterSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
}

export default asSlide(SentimeterSlide)
