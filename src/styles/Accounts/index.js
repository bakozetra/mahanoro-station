import React from 'react'
import {Form , Input , Title , Button , Label , SubTitle , Content , Paragraph , CancelButton , Section , Image } from "./style/account"

export default function Accounts ({children , ...restProps}) {
  return <Section {...restProps} >{children}</Section>
}

Accounts.Title = function AccountsTitle ({children , ...restProps}) {
   return <Title {...restProps}>{children}</Title>
}

Accounts.Button = function AccountsButton ({children , ...restProps}) {
   return <Button {...restProps}>{children}</Button>
}

Accounts.Input = function AccountsInput ({children , ...restProps}) {
   return <Input {...restProps}>{children}</Input>
}
Accounts.Label = function AccountsLabel ({children , ...restProps}) {
   return <Label {...restProps}>{children}</Label>
}
Accounts.SubTitle = function AccountsSubTitle ({children , ...restProps}) {
   return <SubTitle {...restProps}>{children}</SubTitle>
}

Accounts.Content = function AccountsContent ({children , ...restProps}) {
   return <Content {...restProps}>{children}</Content>
}
Accounts.Paragraph = function AccountsParagraph ({children , ...restProps}) {
   return <Paragraph {...restProps}>{children}</Paragraph>
}
Accounts.CancelButton = function AccountsCancelButton ({children , ...restProps}) {
   return <CancelButton {...restProps}>{children}</CancelButton>
}
Accounts.Form = function AccountsForm ({children , ...restProps}) {
   return <Form {...restProps}>{children}</Form>
}
Accounts.Image = function AccountsImage ({...restProps}) {
   return <Image {...restProps}/>
}