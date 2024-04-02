import React, { useContext } from 'react'
import { BgColorContext } from '../../../store/BgColorContext'

const Child1 = ({borderColor}) => {
    const bgColor = useContext(BgColorContext)
  return (
    <div style={{backgroundColor: bgColor, border: `4px solid ${borderColor}`}}>Child1</div>
  )
}

export default Child1