import React from 'react'
import {Container , Title , Button  , Content , Image} from "./style/destinations"

export default function Destiantions ({children , ...restProps}) {
  return <Container {...restProps} >{children}</Container>
}

Destiantions.Title = function DestiantionsTitle ({children , ...restProps}) {
   return <Title {...restProps}>{children}</Title>
}

Destiantions.Button = function DestiantionsButton ({children , ...restProps}) {
   return <Button {...restProps}>{children}</Button>
}
Destiantions.Content = function DestiantionsContent ({children , ...restProps}) {
   return <Content {...restProps}>{children}</Content>
}
Destiantions.Image = function DestiantionsImage ({children , ...restProps}) {
   return <Image {...restProps}>{children}</Image>
}
