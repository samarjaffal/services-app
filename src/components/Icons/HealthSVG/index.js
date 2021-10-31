import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const HealthSVG = (props) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
      viewBox='0 0 24 24'
      {...props}
    >
      <Path d='M21.598 11.456A6.488 6.488 0 0124 16.5a6.504 6.504 0 01-8.82 6.073l6.418-11.117zM9.695 19.865l-.363.634a5.002 5.002 0 01-6.831 1.831A5.002 5.002 0 01.67 15.499L7.543 3.501a5 5 0 016.831-1.831 5.005 5.005 0 012.055 6.395 8.461 8.461 0 00-2.756.843l.799-1.407a3.002 3.002 0 00-1.098-4.099 3.003 3.003 0 00-4.099 1.099l-3.372 5.935 3.978 2.296a8.46 8.46 0 00-.879 3.767c0 1.195.247 2.334.693 3.366zm3.75 1.714A6.49 6.49 0 0111 16.5a6.504 6.504 0 018.872-6.053l-6.427 11.132z' />
    </Svg>
  )
}
