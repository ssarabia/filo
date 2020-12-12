import React from "react"
import { AppBar, Toolbar, List, ListItem, ListItemText, TextareaAutosize } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    navDisplayFlex: {
        display: 'flex',
        overflow: 'auto',
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});

const navLinks = [
    { title: `Ruleta`, path: `/Containers/Roulette/index.js` },
    { title: `Restaurantes`, path: `/Containers/RestaurantDetail/index.js` },
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <List component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navDisplayFlex}>
                    {navLinks.map(({ title, path }) => (
                        <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar