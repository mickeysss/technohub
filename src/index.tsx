import { render } from 'react-dom';
import App from './App';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../assets/styles/theme/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
