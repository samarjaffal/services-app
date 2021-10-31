import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const SocialSVG = (props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg' width={props.size || 24}
      height={props.size || 24} {...props} viewBox='0 0 24 24'
    >
      <Path d='M21.216 8H19V6.25l1-3.095V0h-5.246C12.596 6.369 10.502 9.992 8 10V9H0v13h8v-1h2l2.507 2h8.461L24 20.074V9.813L21.216 8zM22 19.225L20.161 21h-6.954L10.7 19H8v-7c3.781 0 6.727-5.674 8.189-10H18v.791l-1 3.095V10h3.623l1.377.897v8.328z' />
    </Svg>
  )
}
