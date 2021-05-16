const express = require('express');

const port = process.env.NODE_PORT
const app = express()

  // listen for requests
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })