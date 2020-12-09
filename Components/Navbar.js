import * as React from "react"
import { AppBar, Toolbar } from "@material-ui/core"

const navLinks = [
    { title: `Ruleta`, path: `pages/roulette` },
    { title: `Restaurantes`, path: `pages/restaurants` },
  ]

const Navbar = () => {
    return (
        <AppBar position="static">
          <Toolbar></Toolbar>
        </AppBar>
      )
}

export default Header