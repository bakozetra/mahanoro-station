import styled from "styled-components"
export const Container = styled.div`
	 background: rgba(255,255,255,0.8);
    height: 100vh;
    width: 100vw;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    top: 0;
    display: grid;
    padding-bottom: 6rem;
    position: absolute;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    /* -webkit-box-align: center; */
    -ms-flex-align: center;
    align-items: center;
    opacity: 1;
}


`
export const Title = styled.h2`
font-size: 36px;
line-height: 43px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #000000;`
export const Paragraph = styled.p`
font-size: 20px;
color: #000000;
width: 47%;
margin-left: auto;
margin-right: auto;`;
export const Button = styled.button `
width: 290px;
height: 74px;
background: #E53170;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;`;
export const Form = styled.form `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 773px;
height: 593px;
left: 339px;
top: 231px;
background: #FFFFFF;
border: 5px solid #E53170;
box-sizing: border-box;`;
