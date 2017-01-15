import React, {Component} from 'react'
import {Link} from 'react-router'

import selfie from '../images/selfie.png'
import show from '../images/show.png'
import teaching from '../images/teaching.png'

class Home extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron text-center">
          <h2><Link to="/lessons" id="signup">Sign up</Link> for guitar/music theory lessons</h2>
        </section>
        <div className="container row">
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
              <img src={selfie} alt="me"/>
              <div className="caption">
                <h3>About me</h3>
                <p>Hi! My name is Jackson and I am a Boston-based musician and music teacher.</p>
                <p><Link to="/about"><button className="btn btn-primary">Learn more</button></Link></p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
              <img src={teaching} alt="teaching"/>
              <div className="caption">
                <h3>YouTube channel</h3>
                <p>Covers, originals, lessons, and more!</p>
                <p><a href="https://www.youtube.com/jacksonlenhartmusic" className="btn btn-danger" role="button">Watch videos</a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
              <img src={show} alt="show"/>
                <div className="caption">
                  <h3>See me play!</h3>
                  <p>Check out my upcoming show dates to catch me at various locations in the Greater Boston area.</p>
                  <p><Link to="/shows"><button className="btn btn-primary">Upcoming shows</button></Link></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
