const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'ticker', 
  symbol: 'tBTCUSD' 
});

// adding some new features
// this is more stuff
// this is very good stuff here!
// fixing shit

w.on('open', () => w.send(msg))
