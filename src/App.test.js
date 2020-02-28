import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('#App', () => {
  it('renders without crashing', (done) => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);

    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(div);
      done();
    })
  });
});
