const https = require('https')

module.exports = async (url) =>
  new Promise((resolve, reject) =>
    https.get(url, response => {
      let data = ''
      response.on('data', chunk => data += chunk)
      response.on('end', () => resolve(JSON.parse(data)))
    }).on('error', reject)
  )
