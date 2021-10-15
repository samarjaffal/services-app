import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const TagSVG = (props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <Path d='M10.452 2l8.271 8.265-5.431 5.279L5 7.23V2h5.452zm.828-2H3v8.058l10.271 10.296 8.302-8.07L11.28 0zM9.56 6.559a1.5 1.5 0 01-2.12 0 1.496 1.496 0 010-2.118 1.5 1.5 0 012.12 0 1.496 1.496 0 010 2.118zm11.01 7.407L22 15.375 13.312 24 3 13.683V10.85l10.349 10.291 7.221-7.175z' />
    </Svg>
  )
}
