
import './App.css';
import Main from './components/main';

import { BrowserRouter } from 'react-router-dom';
 // import routing facilities it is a component itself

const App = () => {
  return (
    <div className='App'>
      
      <BrowserRouter> 
      <Main />
      </BrowserRouter>
  
    </div>
  )

}

export default App;
