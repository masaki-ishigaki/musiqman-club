import React from 'react'

import Checkout from './checkout'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 3)
  }
}))


export default function Plan(props) {
  const classes = useStyles()

  return (
    <Grid container spacing={4}>
        {props.contents.map((content, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardHeader
                title={
                  <Typography component="div" align="center">
                    <Box fontWeight="fontWeightBold" fontSize={20}>
                      {content.planName}
                    </Box>
                  </Typography>
                }
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="subtitle1" component="h2" align="center">
                  {content.price}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                  {'<Menu>'}
                </Typography>
                <ul>
                  {content.menu.map((item, index) => (
                    <li key={index}>
                      <Typography variant="body2">{item.discription}</Typography>
                      {item.appendix.map((elment, index) => (
                        <Typography variant="body2" key={index}>{elment}</Typography>
                      ))}
                    </li>
                  ))}
                </ul>
              </CardContent>
              { content.btnDisp
                ? <CardActions className={classes.button}>
                    <Checkout planId={content.planID} />
                  </CardActions>
                : <div></div>
              }
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}
