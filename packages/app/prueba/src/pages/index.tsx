import * as React from 'react'
import { NextPage } from 'next'
import { Button } from 'components/Button'
import { capitalize } from '@andreani/functions'

const Index: NextPage = () => {
  const handleClick = (): void => {
    alert('World')
  }

  return (
    <div>
      <Button label={capitalize('hello prueba')} onClick={handleClick} />
    </div>
  )
}

export default Index
