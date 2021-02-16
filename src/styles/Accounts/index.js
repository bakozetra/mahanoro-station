import React from 'react'
import {Form , Input , Title , Button , Label , SubTitle} from "./style/account"

export default function Accounts ({children , ...restProps}) {
  return <Form {...restProps} >{children}</Form>
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