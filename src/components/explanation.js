import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: theme.spacing(6)
  },
  emphasis: {
    fontSize: '1.8rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8rem',
    },
    fontWeight: 'bold'
  }
}))

export default function Explanation() {
  const classes = useStyles()

  return (
      <Container>
        <div className={classes.paragraph}>
          <Typography variant="body1" color="textPrimary">
            <span className={classes.emphasis}>musiqman Jr.</span>は「最初からこんなに歌えた訳じゃない、このパフォーマンス力や声は現場に、そしてライブを聞いてくれた人たちに育ててもらったものだよ」と言います。時には、何度もライブに足を運んでいただいている方に「世の中にいっぱい良いアーティストさんがいるので、色んなライブ聞いた方がいいっすよ♪僕のライブなんか、たまにでいいんじゃないですか〜」なんて言うくらいあんまりエゴのない人です笑
          </Typography>
          <Typography variant="body1" color="textPrimary">
            実を言うと、musiqman Jr.本人は曲を作っているのが好きだったり、後輩に歌のディレクションをしたり、ビジネスの方向付けをしたり、とにかく新しいことを考えるのが好きな裏方志向な人だったりもします。
          </Typography>
          <Typography variant="body1" color="textPrimary">
            このJr.倶楽部はそんな裏方musiqman Jr.の頭の中をちょっと覗くことができるサービスです。未発表な音源から、まだ完成していない曲のかけらをお聞きいただけたり、オリジナル楽曲のことや自身の歌に関して本人の口から語ってもらうRadio Jr.(仮称)の配信などなどをしたりする予定です。
          </Typography>
          <Typography variant="body1" color="textPrimary">
            皆さんの生活のごくごく一部にオンラインジュニアをぜひとも！
          </Typography>
        </div>
      </Container>
  )
}
