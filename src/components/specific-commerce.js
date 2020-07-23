import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'


export default function SpecificCommerce() {

  return (
      <Container>
        <div>
          <Typography variant="body1" color="textSecondary">
            特定商取引法に基づく表記（返品など）
          </Typography>
          <Typography variant="body1" color="textSecondary">
            特定商取引に基づく表記
          </Typography>
          <Typography variant="body1" color="textSecondary">
            【販売業社】Questrip Records
          </Typography>
          <Typography variant="body1" color="textSecondary">
            【運営統括責任者名】服部準之助
          </Typography>
          <Typography variant="body1" color="textSecondary">
            【郵便番号】466-0064
          </Typography>
          <Typography variant="body1" color="textSecondary">
            【住所】名古屋市昭和区鶴舞4-4-2-112
          </Typography>
          <br />
          <Typography variant="body1" color="textSecondary">
            【申込有効期限】決済後7日以内といたします。ご入金がない場合は、購入の意思がないものとし、注文を自動的にキャンセルとさせていただきます。
          </Typography>
          <br />
          <Typography variant="body1" color="textSecondary">
            【お支払い方法】クレジット決済
          </Typography>
          <Typography variant="body1" color="textSecondary">
            【返品期限】決済後7日以内とさせていただきます。
          </Typography>
          <br />
          <Typography variant="body1" color="textSecondary">
            【屋号またはサービス名】Questrip Records
          </Typography>
          <Typography variant="body1" color="textSecondary">
            【ホームページアドレス】<a href="https://musiqmanjr.com/">https://musiqmanjr.com/</a>
          </Typography>
          <br />
          <Typography variant="body1" color="textSecondary">
            【特定商取引に基づく表記】　RSS / ATOM
          </Typography>
        </div>
      </Container>
  )
}
