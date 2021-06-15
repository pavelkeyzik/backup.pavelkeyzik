import { css } from 'styled-components';

const config = {
  sizes: {
    0: '0px',
    24: '24px',
    64: '64px',
  },
  contentPadding: css`
    padding: 0 24px;

    @media (min-width: 600px) {
      padding: 0 64px;
    }
  `,
  primary: '#EB6D87',
};

export { config };
