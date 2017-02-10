import * as Preact from 'preact';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  Preact.render(<App />, div);
});
