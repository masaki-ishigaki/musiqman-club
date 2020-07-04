import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10, 2)
  },
  plan: {
    padding: theme.spacing(4, 0)
  },
  explanationTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    [theme.breakpoints.up('sm')]: {
      fontSize: 36
    }
  },
  description: {
    fontSize: 16,
    [theme.breakpoints.up('sm')]: {
      fontSize: 30
    }
  },
  link: {
    margin: theme.spacing(4, 0),
    fontSize: 16,
    [theme.breakpoints.up('sm')]: {
      fontSize: 30
    }
  }
}))

export default function Success({ data }) {
  const classes = useStyles()
  const preventDefault = (event) => event.preventDefault()
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.plan} maxWidth="md">
        <Typography component="div" align="center" className={classes.planTitle}>
          <Box className={classes.explanationTitle}>
            musiqman Jr. 倶楽部へのご登録ありがとうございます
          </Box>
          <Box className={classes.description}>
            今後ともご支援のほどよろしくお願いいたします！！
          </Box>
          <Box className={classes.link}>
            <Link href="https://musiqmanjr.com/">
              musiqman Jr.公式HPに戻る
            </Link>
          </Box>
        <Img fluid={data.file.childImageSharp.fluid} />
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "musiqman.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
