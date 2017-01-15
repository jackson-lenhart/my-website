import React, {Component} from 'react'

class Shows extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron">
          <div className="container">
            <div className="row text-center">
              <h2>Upcoming shows!</h2>
            </div>
          </div>
        </section>

        <div className="container">
            <li className="list-group-item">
              <a href="https://britishbeer.com/location/framingham/">British Beer Company, Framingham</a> Friday, January 27th 8:30pm-11:30pm
            </li>
            <li className="list-group-item">
              <a href="http://dolphinseafood.com">Dolphin Seafood, Natick</a> Saturday, February 4th 8pm-11pm
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Shows
