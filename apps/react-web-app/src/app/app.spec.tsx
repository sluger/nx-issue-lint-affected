import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
    // TODO: add any change here and stage it for git to reproduce the error: `'_' is not found in schema` with the CLI cmd `npx lint-staged -d`
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Welcome react-web-app/gi)).toBeTruthy();
  });
});
