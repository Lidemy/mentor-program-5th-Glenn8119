const request = require('request')

const conuntryName = process.argv[2]
request(
  `https://restcountries.eu/rest/v2/name/${conuntryName}`,
  (err, response, body) => {
    if (err) {
      console.log(err)
      return
    }
    const json = JSON.parse(body)
    if (json.status === 404) {
      console.log('找不到這個國家')
      return
    }
    json.forEach((item) => {
      console.log('============')
      console.log(`國家: ${item.name}`)
      console.log(`首都: ${item.capital}`)
      console.log(`貨幣: ${item.currencies[0].code}`)
      console.log(`國碼: ${item.callingCodes[0]}`)
    })
  }
)
