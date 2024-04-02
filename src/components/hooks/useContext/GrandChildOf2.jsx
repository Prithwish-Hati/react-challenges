import React, { useContext } from 'react'
import { BgColorContext } from '../../../store/BgColorContext'

const GrandChildOf2 = ({ borderColor }) => {
  const bgColor = useContext(BgColorContext)
  return (
    <div style={{ backgroundColor: bgColor, border: `4px solid ${borderColor}` }}>GrandChildOf2</div>
  )
}

export default GrandChildOf2