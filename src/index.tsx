import { render } from 'react-dom';
import App from './app/App';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
