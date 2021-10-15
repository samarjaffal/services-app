import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const BookSVG = (props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || 24}
      height={props.size || 24}
      viewBox='0 0 24 24'
      {...props}
    >
      <Path d='M22 0H5a3 3 0 00-3 3v18a3 3 0 003 3h17V4h-4v8l-2-2-2 2V4H5.495c-1.375 0-1.375-2 0-2H22V0z' />
    </Svg>
  )
}
