import { Global, css } from '@emotion/react';

const styles = css`
  * {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
