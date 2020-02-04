import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

import NavBar from "./Globals/NavBar"
import {Footer} from "./Globals/Footer"

const Layout = ({ children }) => {

  return (
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
