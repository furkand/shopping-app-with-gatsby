import React from "react"
import PropTypes from "prop-types"
import NavBar from "./Globals/NavBar"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
    <NavBar/>
    {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
