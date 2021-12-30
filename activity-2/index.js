const dig = require('./dig')
const fixture = require('./fixture')

console.log('Suburb: ', dig('address.office.suburb', fixture))
console.log('AsxListed: ', dig('industry.asxListed', fixture))

// ensure the function does not blow up when passed an invalid path
console.log('StockPrice: ', dig('details.stockPrice', fixture))
