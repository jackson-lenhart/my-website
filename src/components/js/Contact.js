import React, {Component} from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron">
          <div className="container">
            <div className="row text-center">
              <h2>Contact me</h2>
            </div>
          </div>
        </section>
    		<div className="container">
    			<ul className="list-group">
    				<li className="list-group-item">Email: jacksonlenhart@gmail.com</li>
    				<li className="list-group-item">Twitter: <a href="https://twitter.com/jacksonlenhart">@JacksonLenhart</a></li>
    				<li className="list-group-item">Personal Facebook: <a href="https://facebook.com/jackson.lenhart">facebook.com/jackson.lenhart</a></li>
    			</ul>
    		</div>
    	</div>
    )
  }
}

export default Contact
