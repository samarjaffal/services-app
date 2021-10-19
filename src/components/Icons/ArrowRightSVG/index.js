import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowRightSVG = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
      {...props}
    >
      <Path d='M21.883 12l-7.527 6.235L15 19l9-7.521L15 4l-.645.764L21.884 11H0v1h21.883z' />
    </Svg>
  )
}
