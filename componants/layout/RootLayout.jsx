import React from 'react'
import Heading from './Heading'
import Fotter from './Fotter'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Heading/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default RootLayout