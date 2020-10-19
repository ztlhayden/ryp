import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './Footer'

import '../style/index.scss'

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle="Russ Young Painting" />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
