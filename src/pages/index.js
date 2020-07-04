import React from 'react';

import Header from '../components/header'
import Explanation from '../components/explanation'
import Plan from '../components/plan'
import Appendix from '../components/appendix'

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Musiqman Jr.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createMuiTheme()
theme.typography.h3 = {
  fontSize: '1.8rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.8rem',
  }
}
theme.typography.h4 = {
  fontSize: '1.4rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.4rem',
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 2)
  },
  explanation: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 6),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(20, 0, 6)
    }
  },
  explanationTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    [theme.breakpoints.up('sm')]: {
      fontSize: 40
    }
  },
  plan: {
    padding: theme.spacing(4, 0)
  },
  planTitle: {
    marginBottom: theme.spacing(5)
  },
  appendix: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10, 0, 6)
    }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const patronProjectPlan = [
  {
    planName: 'ブロンズ',
    price: '660円/month(税込み)',
    menu: [
      {
        discription: '未発表音源サイトへのアクセス権',
        appendix: ['-> 未発表Jr.オリジナル楽曲デモ、スタジオ録音&LIVE音源、など(毎月更新)', '-> 楽曲の使用権の販売も応相談']
      },
      {
        discription: 'Liveスケジュールの事前告知サイトへのアクセス権',
        appendix: []
      }
    ],
    btnDisp: true,
    planID: 'price_1H18SlBPaPMi6BaLZL0aiX2Y'
  },
  {
    planName: 'ゴールド',
    price: '1,200円/month(税込み)',
    menu: [
      {
        discription: '+ ブロンズプランのMenu',
        appendix: []
      },
      {
        discription: '個人的な演奏依頼をお引き受けします(個人宅から会社の会議室までどこまでも)',
        appendix: ['-> Jr.の歌に関して、詩曲やアルバムに関する哲学やエピソードやツアー先からの発信', '-> また、現役シンガーやこれから歌を志す方からの質問もありありです。']
      },
      {
        discription: '個人的な演奏依頼をお引き受けします(個人宅から会社の会議室までどこでも)',
        appendix: []
      }
    ],
    btnDisp: true,
    planID: 'price_1H18W9BPaPMi6BaL6ATIMI2q'
  },
  {
    planName: 'ブラック',
    price: '1,980円/month(税込み)',
    menu: [
      {
        discription: '+ ゴールドプランのMenu',
        appendix: []
      },
      {
        discription: '不定期にmusiqman Jr.グッズをプレゼントします。',
        appendix: []
      },
      {
        discription: 'musiqman Jr.のライブ動画配信(隔月予定)',
        appendix: []
      }
    ],
    btnDisp: true,
    planID: 'price_1H18WOBPaPMi6BaLpMMRIhLI'
  },
  {
    planName: 'パラディウム',
    price: '4,980円/month(税込み)',
    menu: [
      {
        discription: '+ ブラックプランのMenu',
        appendix: []
      },
      {
        discription: 'musiqman Jr.とカラオケへGo!!(遠隔地の方はZOOMカラオケも可',
        appendix: ['-> 好きな歌を色々歌ってもらえるチャンス笑', '->歌に関するコーチングも可能です。']
      }
    ],
    btnDisp: true,
    planID: 'price_1H18WzBPaPMi6BaLMGulLEfV'
  },
  {
    planName: 'エクストラプラン',
    price: '要相談',
    menu: [
      {
        discription: '<<エンタープライズ>>',
        appendix: []
      },
      {
        discription: '法人向けプラン / お問い合わせください',
        appendix: []
      },
      {
        discription: '☆社歌、CM楽曲等々制作',
        appendix: []
      }
    ],
    btnDisp: false
  }
]

export default function Index() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <div className={classes.root}>
            {/* Hero unit */}
            <div className={classes.explanation}>
              <Explanation />
            </div>
            <Container className={classes.plan} maxWidth="md">
              <Typography component="div" align="center" className={classes.planTitle}>
                <Box className={classes.explanationTitle}>
                  musiqman Jr.倶楽部
                </Box>
                <Box className={classes.explanationTitle}>
                  会員プラン詳細
                </Box>
              </Typography>
              {/* End hero unit */}
              <Plan contents={patronProjectPlan} />
            </Container>
            <div className={classes.appendix}>
              <Appendix />
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Copyright />
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}