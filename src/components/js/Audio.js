import React, {Component} from 'react'

class Audio extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-middle">
          <iframe className="media-object"
            width="50%" height="180" scrolling="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/289231691&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
          ></iframe>
        </div>
      </div>
    )
  }
}

export default Audio
