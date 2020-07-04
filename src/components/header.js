import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(4)
    },
  }
}))

export default function HideAppBar(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>

            <Typography
              variant="h4"
              className={classes.title}
            >
              musiqman Jr.倶楽部
            </Typography>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
