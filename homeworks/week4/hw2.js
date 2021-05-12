const task = process.argv[2]
const input = process.argv[3]
const request = require('request')

if (task === 'list') {
  listBooks()
} else if (task === 'read') {
  readBook(input)
} else if (task === 'delete') {
  deleteBook(input)
} else if (task === 'create') {
  createBook(input)
} else if (task === 'update') {
  updateBook(input, process.argv[4])
} else {
  console.log('unknown task')
}

function listBooks() {
  request(
    'https://lidemy-book-store.herokuapp.com/books' + '?_limit=20',
    (err, response, body) => {
      if (err) {
        console.log(err)
        return
      }
      try {
        const books = JSON.parse(body)
        books.forEach((book) => {
          console.log(book.id, book.name)
        })
      } catch (error) {
        console.log(error)
      }
    }
  )
}

function readBook(input) {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${input}`,
    (err, response, body) => {
      if (err) {
        console.log(err)
        return
      }
      try {
        const book = JSON.parse(body)
        console.log(book)
      } catch (error) {
        console.log(error)
      }
    }
  )
}

function deleteBook(input) {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${input}`,
    (err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('刪除成功!')
    }
  )
}

function createBook(input) {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: input }
    },
    (err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('新增成功!')
    }
  )
}

function updateBook(input, name) {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${input}`,
      form: { name }
    },
    (err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('修改書名成功!')
    }
  )
}
