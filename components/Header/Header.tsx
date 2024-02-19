import React from 'react';
import Button from '../styles/Button';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
display:flex;
justify-content: center;
align-itens: center;
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-itens: center;
color: #BF4F74;
font-size: 30px
`

const GlobalStyle = createGlobalStyle`
* {
    font-family: sans-serif;
}
`

function Header() {

    return (
        <>

            < GlobalStyle />
            <Title>Button Demo</Title>
            <Container>

                <Button btnName='Normal Button'></Button>
                <Button btnName='Primary Button' $primary></Button>
            </Container>
        </>
    )
}

export default Header;