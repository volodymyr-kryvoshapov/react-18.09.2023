import React, { memo, useState, useCallback, useMemo } from 'react'
import { emulateSlowCode } from './utils/emulateSlowCode'
import { emulatePostRequest } from './utils/emulatePostRequest'

const ShippingForm = memo(function ShippingForm ({ onSubmit }) {
  const [count, setCount] = useState(1)

  emulateSlowCode('ShippingForm')

  console.log('ShippingForm rendered')

  function handleSubmit (e) {
    e.preventDefault()
    // Do nothing, just a stub

    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label>
      <label>
        Street:
        <input name="street"/>
      </label>
      <label>
        City:
        <input name="city"/>
      </label>
      <label>
        Postal code:
        <input name="zipCode"/>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
})

function ProductPage ({ productId, referrer, theme }) {
  const handleSubmit = useCallback(() => {
    emulatePostRequest('https://example.com', { productId, referrer })
  }, [productId, referrer])

  const qrCodeLink = useMemo(() => {
    emulateSlowCode('ProductPage')

    return `./qr-code.png?productId=${productId}&referrer=${referrer}`
  }, [productId, referrer])

  return (
    <>
      <div>
        <img width={100} src={qrCodeLink} alt="QR code"/>
      </div>
      <div className={theme}>
        <ShippingForm onSubmit={handleSubmit}/>
      </div>
    </>
)

}

export function App () {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr/>
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  )
}
