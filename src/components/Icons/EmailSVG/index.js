import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const EmailSVG = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
      {...props}
    >
      <Path d='M22.288 21H1.712A1.713 1.713 0 010 19.288V5.712C0 4.767.767 4 1.712 4h20.576C23.233 4 24 4.767 24 5.712v13.576c0 .945-.767 1.712-1.712 1.712zM12 14.914L2.658 8.431 2.638 20h18.684V8.431L12 14.914zM20.869 5H3.08L12 11.229S18.252 6.823 20.869 5z' />
    </Svg>
  )
}
