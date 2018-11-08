var quotes = [
  "I HAVE 26 KIDS AND IM ONLY 12 YEARS OLD",
  "Christianity is the killer of muscles",
  "BABE-LINCON!",
  "ZUCCINI",
  "Jole who said you could stay up so late? get back to bed",
  "ill break your neco neco kneecaps",
  "they are putting frogs in the chemicals to make the gays water",
  "THE GODS HAVE SPOKEN"

]

function newQuote() {
  //alert('hello')
var randNum = Math.floor(Math.random() * (quotes.length) )
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}
