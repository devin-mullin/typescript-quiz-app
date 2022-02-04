import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    html {
        height: 100%;
    }

    body {
        background: url('https://i.kym-cdn.com/news/posts/mobile/000/000/087/mario.jpg');
        background-size: cover;
        justify-content: center;
        display: flex;
        font-family: 'Roboto', sans-serif;
        color: #fff
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 3rem;
        margin: 0;
    }

    .question {
        font-family: 'Roboto', sans-serif;
        background-image: linear-gradient(180deg, #ff0f, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
    }

    h1 {
        font-family: 'Courier New', monospace;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .start, .next{
        cursor: pointer;
        background: linear-gradient(180deg, #ff0f, #87f1ff));
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

        :hover {
            opacity: 0.8;
        }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked })=> 
        correct
        ? 'linear-gradient(90deg, #56ffa4, #59b86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'
    }
        border: 3px solid;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1)
        color: #fff;
        text=shadow: 0px 1px 0px rgba(0,0,0,0.25)
    }
`