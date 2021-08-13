import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import PageRender from './customRouter/render'
import Home from './elements/home'
import Login from './elements/login'
import Register from './elements/register'
import Alert from './misc/alert/Alert'
import Header from './misc/header/Header'
import StatusModal from './misc/StatusModal'
import {refreshToken} from './redux/actions/authAction'
import PrivateRouter from './customRouter/PrivateRouter';
import {getPosts} from './redux/actions/postAction';


function App() {
  const {auth, status, modal} = useSelector(state=>state);
  const dispatch = useDispatch()
  useEffect (() => {
    dispatch(refreshToken())

  },[dispatch])

  useEffect (() => {
    if(auth.token) dispatch(getPosts(auth.token))

  },[dispatch,auth.token])
  return (
    <Router>
      <Alert/>
      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && 'mode'}`}>
    <div className='main'>
     {auth.token && <Header/>}
     {status && <StatusModal/>}
    <Route exact path ="/" component={auth.token? Home : Login}/>
    <Route exact path ="/register" component={Register}/>
      <PrivateRouter exact path ="/:page" component={PageRender}/>
      <PrivateRouter exact path="/:page/:id" component={PageRender}/>
    </div>
    </div>
    </Router>
  );
}

export default App;
