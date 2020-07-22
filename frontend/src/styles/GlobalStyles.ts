import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};
a{
    text-decoration: none;
    color: inherit;
}

*{
    box-sizing: border-box;
}

body {
    background: linear-gradient(129deg,rgba(242,47,70,.85),rgba(0,140,255,.85)),url('https://assets.twilio.com/public.assets/try-twilio/1.11.0/img/bg.png') 50% 50% no-repeat;
    background-size: cover;
    padding-top: 0;
    font-family: font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:12px;
    color: #3a3d42;
}
`;

export default globalStyles;
