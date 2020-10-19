import React from "react"

const Footer = () => {

  return (
    <footer>
      © {new Date().getFullYear()}, Created by
      {` `}
      <a href="https://deadhead.design">Deadhead.Design</a>
    </footer>
  )
}

export default Footer