import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const JewelSVG = (props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || 24}
      height={props.size || 24}
      viewBox='0 0 24 24'
      {...props}
    >
      <Path d='M21 1a4.51 4.51 0 01-3 3 4.512 4.512 0 013 3 4.514 4.514 0 013-3 4.51 4.51 0 01-3-3zM1.999 3A3.01 3.01 0 010 5a3.013 3.013 0 012.001 2A3.008 3.008 0 014 5a3.015 3.015 0 01-2.001-2zm18.5 16A3.766 3.766 0 0118 21.5a3.765 3.765 0 012.501 2.5A3.764 3.764 0 0123 21.5a3.767 3.767 0 01-2.501-2.5zM11 0a3.008 3.008 0 01-2 2 3.015 3.015 0 012.002 2A3.009 3.009 0 0113 2a3.016 3.016 0 01-2-2zM2.999 18A4.51 4.51 0 010 21a4.508 4.508 0 013 3 4.52 4.52 0 012.999-3 4.52 4.52 0 01-3-3zM17.062 6H7.008L2 11.625 12 24l10-12.305L17.062 6zm-9.394 6l3.039 7.218L4.875 12h2.793zm7.579 0L12 19.711 8.753 12h6.494zm-6.04-1L12 8.207 14.793 11H9.207zm7.125 1h2.843l-5.899 7.259L16.332 12zm2.418-1h-2.543l-3-3h2.942l2.601 3zM7.904 8h2.889l-3 3H5.234l2.67-3z' />
    </Svg>
  )
}
