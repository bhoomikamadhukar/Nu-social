import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import PageRender from './render.js';

function App() {
  return (
    <Router>
    <div className="App">
    <div className='main'>
      <Route path ="/:element" component={PageRender}/>
    </div>
    </div>
    </Router>
  );
}

export default App;
