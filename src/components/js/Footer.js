import React, {Component} from 'react'

import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <hr/>
    		<div className="row">
    			<ul className="col-sm-8">
    				<li className="col-sm-2">
              <a href="http://youtube.com/jacksonlenhartmusic"><img src={youtube} alt="youtube"/></a>
            </li>
    				<li className="col-sm-2">
              <a href="http://facebook.com/jacksonlenhartmusic"><img src={facebook} alt="facebook"/></a>
            </li>
    				<li className="col-sm-2">
              <a href="http://instagram.com/jacksonlenhartmusic"><img src={instagram} alt="instagram"/></a>
            </li>
    				<li className="col-sm-2">
              <a href="https://www.linkedin.com/in/jackson-lenhart-922374132"><img src={linkedin} alt="linkedin"/></a>
            </li>
    			</ul>
    		</div>
    	</footer>
    )
  }
}

export default Footer
