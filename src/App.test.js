import { render} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import AppMain from './App';

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<AppMain />);
  unmountComponentAtNode(div);
});
