const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 'r4wdmg3i3kti3l63f5ebiwwfs4p0ta',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

request(options, (err, response, body) => {
  if (err) {
    console.log(err)
    return
  }
  try {
    const realBody = JSON.parse(body).top
    realBody.forEach((item) => {
      console.log(item.viewers, item.game.name)
    })
  } catch (error) {
    console.log(error)
  }
})
