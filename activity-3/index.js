const fetch = require('./fetch')

fetch('https://api.megaport.com/v2/locations')
  .then(console.log)
  .catch(console.error)
