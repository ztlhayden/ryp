import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle="Russ Young Painting"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="https://deadhead.design">Deadhead.Design</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
