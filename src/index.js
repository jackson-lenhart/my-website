import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import About from './components/js/About'
import Contact from './components/js/Contact'
import Home from './components/js/Home'
import Layout from './components/js/Layout'
import Lessons from './components/js/Lessons'
import Shows from './components/js/Shows'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
          <Route path="home" component={Home} />
          <Route path="lessons" component={Lessons} />
          <Route path="shows" component={Shows} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
