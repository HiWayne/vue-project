let express = require('express')

let port = process.env.PORT || 9000

let app = express()

let router = express.Router()

router.get('/', function (req, res, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

const appData = require("./data.json")
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

let apiRoutes = express.Router()

apiRoutes.get("/seller", (req, res) => {
  res.json({
    errno: 0,
    data: seller
  })
})
apiRoutes.get("/goods", (req, res) => {
  res.json({
    errno: 0,
    data: goods
  })
})
apiRoutes.get("/ratings", (req, res) => {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:8080')
})