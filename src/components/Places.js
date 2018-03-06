import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

class Places extends PureComponent {
  render() {
    console.log(this.props)
    const list = this.props.venues.map((venue, i) => {
      // if (!venue.contact) return null
      return (
      <div class='restaurant' style={{height:'auto', marginBottom:5}}>
        <Paper key={i} elevation={0}>
          <div class='restaurant-details' style={{padding:40}}>
            <Typography variant="title">{venue.name}</Typography>
            <Typography component="p">{venue.location.formattedAddress}</Typography>
            <Typography component="p">{venue.contact.formattedPhone}</Typography>
            <Typography component="p">{venue.url}</Typography>
            <Typography component="p">{venue.categories.name}</Typography>
          </div>
        </Paper>
      </div>
      )
    })

    return (
      <div class='restaurant-container' style={{float:'right', textAlign:'left', width:660, margin: 20}}>
        {list}
      </div>
    )
  }
}
export default Places
