const request = require('request')

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) {
      console.log(error)
      return
    }
    try {
      const books = JSON.parse(body)
      books.forEach((element) => {
        console.log(element.id, element.name)
      })
    } catch (err) {
      console.log(err)
    }
  }
)
