import React from 'react'
import {Head , Title , Image , SubTitle , Content} from "./style/header"

export default function Header({children , ...restProps}) {
  return <Head {...restProps} >{children}</Head>
}

Header.Title = function HeaderTitle ({children , ...restProps}) {
   return <Title {...restProps}>{children}</Title>
}
Header.SubTitle = function HeaderSubTitle ({children , ...restProps}) {
   return <SubTitle {...restProps}>{children}</SubTitle>
}
Header.Content = function HeaderContent ({children , ...restProps}) {
   return <Content {...restProps}>{children}</Content>
}
Header.Image = function HeaderImage ({...restProps}) {
   return <Image {...restProps}/>
}