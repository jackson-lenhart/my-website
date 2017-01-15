import React, {Component} from 'react'

import Footer from './Footer'
import Header from './Header'
import Audio from './Audio'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header componentName={this.props.children.type.name}/>
        {this.props.children}
        <Footer />
        <Audio />
      </div>
    )
  }
}

export default Layout
