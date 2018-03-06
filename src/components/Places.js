import React, { PureComponent } from 'react'

class Places extends PureComponent {
  render() {
    console.log(this.props)
    const list = this.props.venues.map((venue, i) => {
      return (
        <li key={i}>{venue.name}</li>
      )
    })

    return (
      <div>
        <ol>
          {list}
        </ol>
      </div>
    )
  }
}
export default Places
