import React from 'react'
import {Container , Title , Button } from "./style/destinations"

export default function Destiantions ({children , ...restProps}) {
  return <Container {...restProps} >{children}</Container>
}

Destiantions.Title = function DestiantionsTitle ({children , ...restProps}) {
   return <Title {...restProps}>{children}</Title>
}

Destiantions.Button = function DestiantionsButton ({children , ...restProps}) {
   return <Button {...restProps}>{children}</Button>
}
