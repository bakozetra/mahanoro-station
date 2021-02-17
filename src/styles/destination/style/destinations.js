import styled from "styled-components"
export const Title = styled.h2`
font-size: 64px;
line-height: 76px;
color: #000000;
`;

export const Content = styled.div `
 display : flex ;

`;
export const Container = styled.div`
display : grid;
grid-template-areas : "tana toama"
                      "vato mora";

&:nth-child(1) {
  grid-area : tana;
}
`;
export const Button = styled.button`
width: 413px;
height: 100px;
background: #0F0E17;
color: #FFFFFF;
font-size: 36px;
line-height: 43px;
text-align: center;
text-transform: uppercase;
`