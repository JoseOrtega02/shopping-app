import React from 'react'
import { HeaderSide } from './HeaderSide'
import { BodyLists } from './bodylists/BodyLists'

export  function SideLeft() {
  return (
    <div className="side">
      <HeaderSide/>
      <BodyLists/>

    </div>
  )
}
