import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MainComponent from './components/MainComponent';
import EachBot from './components/EachBot'
import NavBar from './components/NavBar';
import CartItems from './components/CartItems';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <NavBar/>

        <Switch>
          <Route exact path="/" component={MainComponent}/>
          <Route exact path="/bots-details/:id" component={EachBot} />
          <Route exact path="/cartItems" component={CartItems}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
