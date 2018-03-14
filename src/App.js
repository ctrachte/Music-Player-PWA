import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <div className="siteMenu">
            <h1>Bloc Jams</h1>
            <nav>
              <Link to='/'><span className="menuOption">Home</span></Link>
              <Link to='/library'><span className="menuOption">Library</span></Link>
            </nav>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/Album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
