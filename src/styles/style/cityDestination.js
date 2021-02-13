import styled from "styled-components"
export const Container = styled.div `
  display : grid ;
  grid-template-areas : "tana  toama"
                        "vato mora";
  &:nth-child(1) {
    grid-area : tana;
  }
  &:nth-of-type(2) {
    grid-area : toama
  }

`
export const Title = styled.h2 `


`
export const Button = styled.button `
width: 413px;
height: 100px;
left: 266px;
top: 512px;
background: #0F0E17;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 43px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
max-width: 100%;
margin-bottom : 2rem;

`