import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const FavoriteIconSVG = (props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || 24}
      height={props.size || 24}
      viewBox='0 0 24 24'
      {...props}
    >
      <Path d='M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z' />
    </Svg>
  )
}
