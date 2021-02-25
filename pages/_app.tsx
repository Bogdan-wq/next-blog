import { createGlobalStyle } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';
import { wrapper } from './../store';

const fontFace = (name: string, src: string): string => {
    return `
    @font-face {
      font-family:${name},
      src:url('./../assets/fonts/${src}')
    }
  `;
};

const GlobalStyle = createGlobalStyle`

    ${fontFace('Roboto Regular', 'Roboto-Regular.ttf')}
    ${fontFace('Roboto Light', 'Roboto-Light.ttf')}

    html,body {
      padding: 0;
      margin: 0;
      font-family:Roboto Regular
    }

    h1,h2,h3,h4,h5,h6,div,p {
      margin:0
    }

    button {
      border:inherit;
      outline:none;
      cursor:pointer;
      font-family:Roboto Regular;
    }

    input {
      &:focus {
        outline:none;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor:pointer;
    }

    * {
      box-sizing: border-box;
    }
`;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress color="black" startPosition={0.3} height={2} />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(MyApp);
