import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
 box-sizing: border-box;
}

 body {
    background: ${({theme}) => theme.colors.body};
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: normal;
    -webkit-line-clamp: 1;
    word-break: break-word;
    -webkit-box-orient: vertical;
    color: rgb(55, 71, 80);
    margin: 0;
}
p {
    opacity: 0.6;
    line-height: 100%;
}
`
export default GlobalStyles