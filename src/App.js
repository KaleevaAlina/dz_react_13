//import logo from './logo.svg';
import React from 'react';
import './App.css';
import DopComponent from './example'
//import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Home extends React.Component{
  render(){
      return <h2>Главная</h2>;
  }
}
class Login extends React.Component{
  render(){
      return <h2>Вход на сайт</h2>;
  }
}
class News extends React.Component{
  render(){
      return <h2>Новости</h2>;
  }
}
class Profile extends React.Component{
  render(){
      return <div>
                  <h2>Профиль</h2>
              </div>;
  }
}
class Nav extends React.Component{
  render(){
      return <nav>
              <Link to="/"  class="active">Главная</Link>  
              <Link to="/Login"  class="active">Введите логин и пароль</Link> 
              <Link to="/News"  class="active">Новости</Link>  
              <Link to="/Profile" class="active">Профиль</Link>
             </nav>;
  }
}
export default function App() {
  return (
    
    <Router>
      <div>
        <div class="menu"><Nav />
        <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/News" component={News} />
                    <Route path="/Profile" component={Profile} />
        </Switch>
        </div>
        <ul>
          <li>
            <Link to="/dop" class="active">Запустить видео</Link>
          </li>
        </ul>

        <Switch>
          <Route component={DopComponent} path="/dop" />
        </Switch>
      </div>
    </Router>
  );
}
