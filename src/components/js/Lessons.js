import React, {Component} from 'react'

class Lessons extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron text-center">
          <h2>I teach guitar and music theory in the Greater Boston area</h2>
        </section>
        <h3 className="text-center">Rates</h3>
        <div className="container">
          <ul className="list-group">
            <li className="list-group-item">At your location: $40/hr; $25/half hr</li>
            <li className="list-group-item">At my home studio in Natick, MA: $30/hr; $18/half hr</li>
            <li className="list-group-item">Online lessons (via Skype or other webcam chat service): $20/hr; $13/half hr</li>
          </ul>

          <div className="row text-center">
            <h4>Currently working on an online sign up option. For now, email me at jacksonlenhart@gmail.com to inquire.</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Lessons
