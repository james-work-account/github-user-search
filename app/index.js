const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const morgan = require('morgan')
const cors = require('cors')
const history = require('connect-history-api-fallback')

const app = express()
app.use(morgan('short'))
app.use(cors())

const staticFileMiddleware = express.static(__dirname + '/dist')
app.use(staticFileMiddleware)
app.use(history({
  disableDotRule: true,
  verbose: true
}))
app.use(staticFileMiddleware)

app.post('/api', graphqlHTTP({
  schema,
  graphiql: true
}))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
