import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddReview from './components/add-review';
import Movie from './components/movie';
import MoviesList from './components/movies-list';
import Login from './components/login';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  const [user, setUser] = useState(null)

  async function login(user=null){
    setUser(user)
  }

  async function logout(){
    setUser(null)
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to={'/movies'}>Movies</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              { user ? (<button onClick={logout}>Logout</button>) : (<Link to={'/login'}>Login</Link>)}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>

        <Route exact path = {['/', '/movies']} component={MoviesList}></Route>

        <Route path = '/movies/:id/review' render={(props)=>
         <AddReview {...props} user={user}/> }></Route>

        <Route path = '/movies/:id/' render={(props)=>
         <Movie {...props} user={user}/> }></Route>

        <Route path = '/login' render={(props)=>
         <Login {...props} login={login}/> }></Route>

      </Switch>
    </div>
  );
}

export default App;
