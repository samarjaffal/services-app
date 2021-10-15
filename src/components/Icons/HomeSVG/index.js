import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const HomeSVG = (props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <Path d='M12 9.185l7 6.514V22h-3v-5H8v5H5v-6.301l7-6.514zm0-2.732l-9 8.375V24h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695L12 1 0 12.133l1.361 1.465L12 3.73l10.639 9.883L24 12.148z' />
    </Svg>
  )
}
