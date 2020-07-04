import React from "react"
import { loadStripe } from "@stripe/stripe-js"

import Button from '@material-ui/core/Button'


const stripePromise = loadStripe("pk_live_KWzYYT2MJSZeIfegjOoMl0j900LkV9eAWR")

export default function Checkout(props) {
  const redirectToCheckout = async () => {
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: props.planID, quantity: 1 }],
      mode: "subscription",
      successUrl: 'http://localhost:8000/',
      cancelUrl: 'http://localhost:8000/'
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={redirectToCheckout}
    >
      Buy
    </Button>
  )
}
