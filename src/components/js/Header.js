import React, { Component } from 'react'
import {Link} from 'react-router'

class Header extends Component {
  render() {
    const tabs = [
      {name: 'Home', to: '/home'},
      {name: 'Lessons', to: '/lessons'},
      {name: 'Shows', to: '/shows'},
      {name: 'About', to: '/about'},
      {name: 'Contact', to: '/contact'}
    ]

    const li = tabs.map(tab => {
      if (tab.name === this.props.componentName) {
        return (
          <li role="presentation" key={tab.name} className="active">
            <Link to={tab.to}>{tab.name}</Link>
          </li>
        )
      }
      return (
        <li role="presentation" key={tab.name}><Link to={tab.to}>{tab.name}</Link></li>
      )
    })

    return (
      <div className="container-fluid">
        <nav className="navbar-fixed-top">
      		<div className="row">
      			<ul className="nav nav-tabs">
      				{li}
      			</ul>
      		</div>
      	</nav>
      </div>
    )
  }
}

export default Header
