import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const CallSVG = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} {...props}>
      <Path d='M18.48 22.926l-1.193.658C10.308 27.205-1.795 6.09 5.008 2.1l1.145-.637L9.867 7.93l-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zM8.672 0l-1.68.975 3.714 6.466 1.681-.975L8.672 0zm8.613 14.997l-1.68.975 3.714 6.467L21 21.464l-3.715-6.467z' />
    </Svg>
  )
}
