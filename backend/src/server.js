const express = require('express');
const routes = require('./routes')

app = express()

app.get('/', (request, response) => {
  response.json({ message: 'Online'})
})

app.use(routes)

app.listen(3333, () => {
  console.log('Back-end started 👨‍💻')
});